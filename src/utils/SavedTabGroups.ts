import {
   ColorEnum,
   LocalStorageTab,
   LocalStorageTabGroup,
   LocalStorageTabGroups,
   LocalStorageTitles,
} from '../types';
import CurrentTabGroups from './CurrentTabGroups';
import TabUtil from './TabUtil';

class SavedTabGroups {
   maxGroups;
   maxTitleDuplicates;
   constructor(maxGroups: number, maxTitleDuplicates: number) {
      this.maxGroups = maxGroups;
      this.maxTitleDuplicates = maxTitleDuplicates;
      SavedTabGroups.initialize();
   }

   // saves or updates all current tab groups
   async takeSnapshot() {
      const groupIds = await CurrentTabGroups.get();
      for (let i = 0; i < groupIds.length; i++) {
         if (groupIds[i] !== -1) {
            const tabs = await TabUtil.get(groupIds[i]);
            await this.save(Number(groupIds[i]), tabs);
         }
      }
   }

   // add group to local storage given groupId and associated chrome.tabs.Tab array
   // if you need to add tabs to a group, use the addTabs method instead
   async save(groupId: number, tabs: chrome.tabs.Tab[]): Promise<void> {
      const groupDetails = await CurrentTabGroups.getInfo(groupId);
      if (groupDetails) {
         const storageInfo = await SavedTabGroups.getInfo(groupId);
         const formattedTabs = SavedTabGroups.formatTabList(tabs);
         if (storageInfo) {
            await this.update(
               storageInfo,
               formattedTabs,
               groupDetails.title || '',
               groupDetails.color
            );
         } else {
            await this.create(groupDetails, formattedTabs);
         }
      } else {
         throw new Error('Cannot save group that does not currently exist.');
      }
   }

   // adds given tabs to saved tab group, or creates tab if none existed
   async addTabs(id: number, tabs: chrome.tabs.Tab[]) {
      const savedGroupInfo = await SavedTabGroups.getInfo(id);
      if (savedGroupInfo !== null) {
         const formattedTabs = savedGroupInfo.tabs;
         const newTabs = SavedTabGroups.formatTabList(tabs);
         const updatedTabs = formattedTabs.concat(newTabs);
         await this.update(
            savedGroupInfo,
            updatedTabs,
            savedGroupInfo.title,
            savedGroupInfo.color
         );
      } else {
         throw new Error('No group with given id exists in local storage.');
      }
   }

   // PRIVATE ////////////////////
   ////////////////////////////
   // saves new tab group to local storage
   private async create(
      group: chrome.tabGroups.TabGroup,
      tabs: LocalStorageTab[]
   ): Promise<void> {
      const newTabGroup = {
         id: group.id,
         color: group.color,
         title: group.title || '',
         tabs: tabs,
         createdAt: Date.now(),
      };
      const titleLimitReached = await this.titleLimitReached(group);
      if (titleLimitReached) {
         await this.deleteOldestTitle(newTabGroup.title);
      }
      const maxLimitReached = await this.groupLimitReached();
      if (maxLimitReached) {
         await this.deleteOldestGroup();
      }
      await SavedTabGroups.updateStorageGroupKey(newTabGroup);
      await SavedTabGroups.saveToSavedTitles(group.id, group.title || '');
   }

   // deletes oldest title
   private async deleteOldestTitle(title: string) {
      const oldest = await this.findOldestGroupByTitle(title);
      console.info(
         `Max title limit reached for ${title} - Deleting oldest title `
      );
      if (oldest) {
         await SavedTabGroups.delete(oldest, title);
      }
   }

   // deletes oldest saved group
   private async deleteOldestGroup() {
      const oldestGroupId = await this.findOldestGroup();
      if (oldestGroupId) {
         const oldestGroupInfo = await SavedTabGroups.getInfo(oldestGroupId);
         if (oldestGroupInfo) {
            console.info(
               `Max number of groups reached - Deleting oldest group `
            );
            await SavedTabGroups.delete(oldestGroupId, oldestGroupInfo.title);
         }
      }
   }

   // updates existing tab group on local storage with new values
   private async update(
      previousGroup: LocalStorageTabGroup,
      tabs: LocalStorageTab[],
      title: string,
      color: ColorEnum
   ): Promise<void> {
      const updatedGroup = {
         id: previousGroup.id,
         color: color,
         title: title || '',
         tabs: tabs,
         createdAt: previousGroup.createdAt,
      };
      console.log('updatedGroup: ', updatedGroup);
      if (title !== previousGroup.title) {
         await SavedTabGroups.deleteFromSavedTitles(
            previousGroup.id,
            previousGroup.title
         );
         await SavedTabGroups.saveToSavedTitles(previousGroup.id, title || '');
      }
      await SavedTabGroups.updateStorageGroupKey(updatedGroup);
   }

   // finds group id of oldest tab group with same title
   private async findOldestGroupByTitle(title: string): Promise<number | null> {
      const oldest = Infinity;
      let result = null;
      const allTitles = (await SavedTabGroups.getKey(
         'savedTitles'
      )) as LocalStorageTitles;
      const saved = allTitles[`${title}`];
      for (let i = 0; i < saved.length; i++) {
         const current = await SavedTabGroups.getInfo(saved[i]);
         if (current !== null && current.createdAt < oldest) {
            result = current.id;
         }
      }
      return result;
   }

   // finds oldest tab group saved in local storage, or returns null if there are no saved groups
   private async findOldestGroup(): Promise<number | null> {
      const currentGroups = await SavedTabGroups.get();
      let oldest = Infinity;
      let groupId = null;
      for (const group in currentGroups) {
         if (currentGroups[group].createdAt < oldest) {
            groupId = currentGroups[group].id;
            oldest = currentGroups[group].createdAt;
         }
      }
      return groupId;
   }

   // checks if total number of saved groups has reached the max limit set
   private async groupLimitReached(): Promise<boolean> {
      const currentGroups = await SavedTabGroups.get();
      const numGroups = Object.keys(currentGroups).length;
      return numGroups >= this.maxGroups;
   }

   // checks if saved title duplicate limit has been reached for given group title
   private async titleLimitReached(
      group: chrome.tabGroups.TabGroup
   ): Promise<boolean> {
      const title = group.title == undefined ? '' : group.title;
      const savedTitles = (await SavedTabGroups.getKey(
         'savedTitles'
      )) as LocalStorageTitles;
      if (title in savedTitles) {
         const cachedIds = savedTitles[title];
         if (cachedIds.length >= this.maxTitleDuplicates) {
            return true;
         }
      }
      return false;
   }

   //   STATIC ////////////////
   ////////////////////////////

   // uses tab group id to delete item from local storage
   static async delete(id: number, title: string) {
      try {
         await SavedTabGroups.deleteFromGroups(id);
         await SavedTabGroups.deleteFromSavedTitles(id, title);
      } catch (e) {
         console.error(e);
      }
   }

   // opens saved group and all tabs in current window
   static async open(id: number) {
      const groupInfo = await SavedTabGroups.getInfo(id);
      if (groupInfo !== null) {
         const tabIds = [];
         for (let i = 0; i < groupInfo.tabs.length; i++) {
            const tab = await TabUtil.create({ url: groupInfo.tabs[i].url });
            if (tab.id) tabIds.push(tab.id);
         }
         await CurrentTabGroups.create(
            groupInfo.title,
            tabIds,
            groupInfo.color
         );
      } else {
         throw new Error(
            'Group with given id does not exist in saved tab groups.'
         );
      }
   }

   // gets all currently saved tab groups from local storage
   static async get(): Promise<LocalStorageTabGroups> {
      const saved = (await SavedTabGroups.getKey(
         'groups'
      )) as LocalStorageTabGroups;
      return saved;
   }

   // retrieves tab group information from local storage given group id
   static async getInfo(id: number): Promise<LocalStorageTabGroup | null> {
      const savedGroups = (await SavedTabGroups.getKey(
         'groups'
      )) as LocalStorageTabGroups;
      if (`${id}` in savedGroups) {
         return savedGroups[`${id}`];
      } else {
         return null;
      }
   }

   // removes given tabs from saved tab group given its group id
   static async removeTab(groupId: number, tabIds: number[]) {
      const groupInfo = await SavedTabGroups.getInfo(groupId);
      if (groupInfo !== null) {
         const updatedTabs = groupInfo?.tabs.filter(
            (tab) => tabIds.includes(tab.id) === false
         );
         if (updatedTabs.length === 0) {
            await SavedTabGroups.delete(groupInfo.id, groupInfo.title);
         } else {
            groupInfo.tabs = updatedTabs;
            await SavedTabGroups.updateStorageGroupKey(groupInfo);
         }
      }
   }

   //   PRIVATE STATIC ////////////////
   ////////////////////////////

   // sets default storage values if have not been set
   private static async initialize(): Promise<void> {
      const groups = SavedTabGroups.getKey('groups');
      const savedTitles = SavedTabGroups.getKey('savedTitles');
      if (groups == null) {
         await chrome.storage.local.set({ ['groups']: {} });
      }
      if (savedTitles == null) {
         await chrome.storage.local.set({ ['savedTitles']: {} });
      }
   }

   // formats list of chrome.tabs.Tab into LocalStorageTab list so that only necessary data is saved
   private static formatTabList(tabs: chrome.tabs.Tab[]): LocalStorageTab[] {
      const storageTabs = tabs.map((tab) => {
         return {
            id: tab.id || Number(Date.now()),
            url: tab.url || '',
            title: tab.title || '',
         };
      });
      return storageTabs;
   }

   // gets value of key from local storage
   private static async getKey(
      key: string
   ): Promise<LocalStorageTabGroups | LocalStorageTitles> {
      const storage = await chrome.storage.local.get([key]);
      if (`${key}` in storage) {
         return storage[`${key}`];
      } else {
         const defaultStorage = {};
         await chrome.storage.local.set({ [`${key}`]: defaultStorage });
         return defaultStorage;
      }
   }

   // saves tab group to local storage, using group.id as key and group as value
   private static async updateStorageGroupKey(
      group: LocalStorageTabGroup
   ): Promise<void> {
      const groups = (await SavedTabGroups.getKey(
         'groups'
      )) as LocalStorageTabGroups;
      groups[group.id] = group;
      await chrome.storage.local.set({ ['groups']: groups });
   }

   // saves group id to saved titles in class and updates local storage
   private static async saveToSavedTitles(
      id: number,
      title: string
   ): Promise<void> {
      const savedTitles = (await SavedTabGroups.getKey(
         'savedTitles'
      )) as LocalStorageTitles;
      if (title in savedTitles) {
         savedTitles[title].push(id);
      } else {
         savedTitles[title] = [id];
      }
      await chrome.storage.local.set({ ['savedTitles']: savedTitles });
   }

   // deletes group using id from groups local storage dictionary
   private static async deleteFromGroups(id: number) {
      const groups = (await SavedTabGroups.getKey(
         'groups'
      )) as LocalStorageTabGroups;
      delete groups[id];
      await chrome.storage.local.set({ ['groups']: groups });
   }

   // deletes group tab from saved titles local storage dictionary
   private static async deleteFromSavedTitles(id: number, title: string) {
      const savedTitles = (await SavedTabGroups.getKey(
         'savedTitles'
      )) as LocalStorageTitles;
      const titlesToDeleteFrom = savedTitles[`${title}`];
      if (titlesToDeleteFrom.includes(id)) {
         if (titlesToDeleteFrom.length == 1) {
            delete savedTitles[`${title}`];
         } else {
            const index = titlesToDeleteFrom.indexOf(id);
            titlesToDeleteFrom.splice(index, 1);
            savedTitles[`${title}`] = titlesToDeleteFrom;
         }
      }
      await chrome.storage.local.set({ ['savedTitles']: savedTitles });
   }
}

const savedTabGroupsInstance = new SavedTabGroups(10, 1);
export { SavedTabGroups as default, savedTabGroupsInstance };
