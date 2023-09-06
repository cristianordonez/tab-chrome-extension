import {
   LocalStorageTab,
   LocalStorageTabGroup,
   LocalStorageTabGroups,
   LocalStorageTitles,
} from '../types';
import CurrentTabGroups from './CurrentTabGroups';

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
      groupIds.forEach(async (groupId) => {
         const tabs = await chrome.tabs.query({ groupId: groupId });
         await this.save(Number(groupId), tabs);
      });
   }

   // add group to local storage given groupId and associated chrome.tabs.Tab array
   async save(groupId: number, tabs: chrome.tabs.Tab[]): Promise<void> {
      const storageInfo = await SavedTabGroups.getInfo(groupId);
      const groupDetails = await CurrentTabGroups.getInfo(groupId);
      const formattedTabs = SavedTabGroups.formatTabList(tabs);
      if (storageInfo !== null) {
         await this.update(groupDetails, storageInfo, formattedTabs);
      } else {
         await this.create(groupDetails, formattedTabs);
      }
   }

   // uses tab group id to delete item from local storage
   async delete(id: number, title: string) {
      try {
         await SavedTabGroups.deleteFromGroups(id);
         await SavedTabGroups.deleteFromSavedTitles(id, title);
      } catch (e) {
         console.error(e);
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
      const limitReached = await this.titleLimitReached(group);
      if (limitReached) {
         const oldest = await this.findOldestTabGroup(group.title || '');
         if (oldest !== null) {
            await this.delete(oldest, newTabGroup.title);
         }
      }
      await SavedTabGroups.updateStorageGroupKey(newTabGroup);
      await SavedTabGroups.saveToSavedTitles(group);
   }

   // updates existing tab group on local storage with new values
   private async update(
      group: chrome.tabGroups.TabGroup,
      previousGroup: LocalStorageTabGroup,
      tabs: LocalStorageTab[]
   ): Promise<void> {
      const updatedGroup = {
         id: previousGroup.id,
         color: group.color,
         title: group.title || '',
         tabs: tabs,
         createdAt: previousGroup.createdAt,
      };
      // if title has updated, delete previous title from savedTitles
      if (group.title !== previousGroup.title) {
         await SavedTabGroups.deleteFromSavedTitles(
            previousGroup.id,
            previousGroup.title
         );
         await SavedTabGroups.saveToSavedTitles(group);
      }
      await SavedTabGroups.updateStorageGroupKey(updatedGroup);
   }

   // finds group id of oldest tab group with same title
   private async findOldestTabGroup(title: string): Promise<number | null> {
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
         if (cachedIds.length < this.maxTitleDuplicates) {
            return false;
         } else {
            return true;
         }
      } else {
         return false;
      }
   }

   // formats list of chrome.tabs.Tab into LocalStorageTab list so that only necessary data is saved
   private static formatTabList(tabs: chrome.tabs.Tab[]): LocalStorageTab[] {
      const storageTabs = tabs.map((tab) => {
         return {
            tabId: tab.id || Number(Date.now()),
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
      group: chrome.tabGroups.TabGroup
   ): Promise<void> {
      const title = group.title !== undefined ? group.title : '';
      const savedTitles = (await SavedTabGroups.getKey(
         'savedTitles'
      )) as LocalStorageTitles;
      if (title in savedTitles) {
         savedTitles[title].push(group.id);
      } else {
         savedTitles[title] = [group.id];
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

const savedTabGroupsInstance = new SavedTabGroups(5, 1);
export { SavedTabGroups as default, savedTabGroupsInstance };
