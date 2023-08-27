import {
   CurrentTabs,
   LocalStorageTab,
   LocalStorageTabGroup,
   LocalStorageTabGroups,
   LocalStorageTitles,
} from '../types';

class TabGroupUtil {
   maxGroups;
   maxTitleDuplicates;
   constructor(maxGroups: number, maxTitleDuplicates: number) {
      this.maxGroups = maxGroups;
      this.maxTitleDuplicates = maxTitleDuplicates;
   }

   static async initialize(): Promise<void> {
      const groups = TabGroupUtil.getKey('groups');
      const savedTitles = TabGroupUtil.getKey('savedTitles');
      if (groups == null) {
         await chrome.storage.local.set({ ['groups']: {} });
      }
      if (savedTitles == null) {
         await chrome.storage.local.set({ ['savedTitles']: {} });
      }
   }

   // gets all active tabs and groups by groupId into proper data structure
   static async getCurrentTabGroups(): Promise<CurrentTabs> {
      const allTabs = await chrome.tabs.query({});
      const tabGroups = await allTabs.reduce(
         async (previousObjectPromise, currentTab) => {
            const previousObject = await previousObjectPromise;
            const groupId = currentTab['groupId'];
            const groupInfo = await TabGroupUtil.getCurrentGroupInfo(groupId);
            if (
               Object.prototype.hasOwnProperty.call(previousObject, groupId) ==
               false
            ) {
               previousObject[`${groupId}`] = {
                  id: groupId,
                  color: groupInfo.color,
                  title: groupInfo.title || '',
                  createdAt: Date.now(),
                  tabs: [],
               };
            }
            const currentItems = previousObject[`${groupId}`];
            currentItems.tabs.push(currentTab);
            return Object.assign(previousObject, {
               [`${currentTab.groupId}`]: { ...currentItems },
            });
         },
         Promise.resolve({}) as Promise<CurrentTabs>
      );
      return tabGroups;
   }

   // gets all currently saved tab groups from local storage
   static async getSavedTabGroups(): Promise<LocalStorageTabGroups> {
      const saved = (await TabGroupUtil.getKey(
         'groups'
      )) as LocalStorageTabGroups;
      return saved;
   }

   // given groupId will get all information about given tab group from chrome API
   static async getCurrentGroupInfo(
      groupId: number
   ): Promise<chrome.tabGroups.TabGroup> {
      if (groupId == -1) {
         return {
            collapsed: false,
            color: 'grey',
            id: -1,
            title: 'Ungrouped',
            windowId: 0,
         };
      } else {
         const groupInfo = await chrome.tabGroups.get(groupId);
         return groupInfo;
      }
   }

   // saves or updates all current tab groups
   async takeSnapshot() {
      const allTabs = await TabGroupUtil.getCurrentTabGroups();
      Object.entries(allTabs).forEach(async ([groupId, tabs]) => {
         if (Number(groupId) !== -1) {
            await this.updateOrCreateGroup(Number(groupId), tabs);
         }
      });
   }

   // add group to local storage given groupId
   async updateOrCreateGroup(
      groupId: number,
      tabs: chrome.tabs.Tab[]
   ): Promise<void> {
      const storageInfo = await TabGroupUtil.getSavedGroupInfo(groupId);
      const groupDetails = await TabGroupUtil.getCurrentGroupInfo(groupId);
      const formattedTabs = TabGroupUtil.formatTabList(tabs);
      if (storageInfo !== null) {
         await this.update(groupDetails, storageInfo, formattedTabs);
      } else {
         await this.saveNew(groupDetails, formattedTabs);
      }
   }

   // uses tab group id to delete item from local storage
   async deleteTabGroup(id: number, title: string) {
      try {
         await TabGroupUtil.deleteFromGroups(id);
         await TabGroupUtil.deleteFromSavedTitles(id, title);
      } catch (e) {
         console.error(e);
      }
   }

   // saves new tab group to local storage
   private async saveNew(
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
            await this.deleteTabGroup(oldest, newTabGroup.title);
         }
      }
      await TabGroupUtil.updateStorageGroupKey(newTabGroup);
      await TabGroupUtil.saveToSavedTitles(group);
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
         await TabGroupUtil.deleteFromSavedTitles(
            previousGroup.id,
            previousGroup.title
         );
         await TabGroupUtil.saveToSavedTitles(group);
      }
      await TabGroupUtil.updateStorageGroupKey(updatedGroup);
   }

   // retrieves tab group information from local storage given group id
   private static async getSavedGroupInfo(
      id: number
   ): Promise<LocalStorageTabGroup | null> {
      const savedGroups = (await TabGroupUtil.getKey(
         'groups'
      )) as LocalStorageTabGroups;
      if (`${id}` in savedGroups) {
         return savedGroups[`${id}`];
      } else {
         return null;
      }
   }

   // finds group id of oldest tab group with same title
   private async findOldestTabGroup(title: string): Promise<number | null> {
      const oldest = Infinity;
      let result = null;
      const allTitles = (await TabGroupUtil.getKey(
         'savedTitles'
      )) as LocalStorageTitles;
      const saved = allTitles[`${title}`];
      for (let i = 0; i < saved.length; i++) {
         const current = await TabGroupUtil.getSavedGroupInfo(saved[i]);
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
      const savedTitles = (await TabGroupUtil.getKey(
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
      const groups = (await TabGroupUtil.getKey(
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
      const savedTitles = (await TabGroupUtil.getKey(
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
      const groups = (await TabGroupUtil.getKey(
         'groups'
      )) as LocalStorageTabGroups;
      delete groups[id];
      await chrome.storage.local.set({ ['groups']: groups });
   }

   // deletes group tab from saved titles local storage dictionary
   private static async deleteFromSavedTitles(id: number, title: string) {
      const savedTitles = (await TabGroupUtil.getKey(
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

   // use to print general debugging information
   async debug(group?: chrome.tabGroups.TabGroup) {
      const all = await chrome.storage.local.get(null);
      console.log('all data saved in local storage: ', all);
      if (group !== undefined) {
         const info = await TabGroupUtil.getSavedGroupInfo(group.id);
         console.log('group information saved in local storage: ', info);
      }
   }
}

export { TabGroupUtil };
