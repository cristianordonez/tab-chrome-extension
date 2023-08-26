import {
   ChromeTabs,
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

   // gets all active tabs and groups by groupId into proper data structure
   static async getTabsByGroup(): Promise<ChromeTabs> {
      const allTabs = await chrome.tabs.query({});
      const tabGroups = allTabs.reduce((previousObject, currentObject) => {
         const groupId = currentObject['groupId'];
         if (
            Object.prototype.hasOwnProperty.call(previousObject, groupId) ==
            false
         ) {
            previousObject[groupId] = [];
         }
         const currentItems = previousObject[groupId];
         return Object.assign(previousObject, {
            [currentObject.groupId]: [...currentItems, currentObject],
         });
      }, {} as ChromeTabs);
      return tabGroups;
   }

   // given groupId will get all information about given tab group from chrome API
   static async getTabGroupInfo(
      groupId: number,
      windowId: number | undefined
   ): Promise<chrome.tabGroups.TabGroup> {
      if (groupId == -1) {
         return {
            collapsed: false,
            color: 'grey',
            id: -1,
            title: 'Ungrouped',
            windowId: windowId || 0,
         };
      } else {
         const groupInfo = await chrome.tabGroups.get(groupId);
         return groupInfo;
      }
   }

   // checks if given group exists in in storage before creating or updating it
   async updateOrCreateTabGroup(group: chrome.tabGroups.TabGroup) {
      // first check if group already exists in storage
      const groupInfo = await this.getGroupFromStorage(group.id);
      const limitReached = await this.titleLimitReached(group);
      if (limitReached) {
         const oldest = await this.findOldestTabGroup(group.title || '');
         if (oldest !== null) {
            this.deleteTabGroup(oldest);
         }
      }
      if (groupInfo !== null) {
         if (Object.keys(groupInfo).length == 0) {
            this.saveNew(group);
         } else {
            this.update(group, groupInfo);
            // //this.update(group, groupInfo[`${group.id}`]);
         }
      }
   }

   // uses tab group id to delete item from local storage
   async deleteTabGroup(id: number) {
      try {
         await this.deleteFromGroups(id);
         await this.deleteFromSavedTitles(id);
      } catch (e) {
         console.error(e);
      }
   }

   // saves or updates all current tab and tabs groups
   static async takeSnapshot() {
      const allTabs = await this.getTabsByGroup();
      Object.entries(allTabs).forEach(([groupId, tabs]) => {
         console.log(`${groupId}: ${tabs}`);
      });
   }

   // retrieves tab group information from local storage given group id
   private async getGroupFromStorage(
      id: number
   ): Promise<LocalStorageTabGroup | null> {
      const savedGroups = (await this.getKey('group')) as LocalStorageTabGroups;
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
      const allTitles = (await this.getKey(
         'savedTitles'
      )) as LocalStorageTitles;
      const saved = allTitles[`${title}`];
      for (let i = 0; i < saved.length; i++) {
         const current = await this.getGroupFromStorage(saved[i]);
         if (current !== null && current.createdAt < oldest) {
            result = current.id;
         }
      }
      return result;
   }

   // gets value of key from local storage
   private async getKey(
      key: string
   ): Promise<LocalStorageTabGroups | LocalStorageTitles> {
      const storage = await chrome.storage.local.get([key]);
      if (`${key}` in storage) {
         return storage[`${key}`];
      } else {
         console.info(
            `Key ${key} has not yet been set. Setting to default value.`
         );
         const defaultStorage = {};
         await chrome.storage.local.set({ [`${key}`]: defaultStorage });
         return defaultStorage;
      }
   }

   // checks if saved title duplicate limit has been reached for given group title
   private async titleLimitReached(
      group: chrome.tabGroups.TabGroup
   ): Promise<boolean> {
      const title = group.title == undefined ? '' : group.title;
      const savedTitles = (await this.getKey(
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

   // saves new tab group to local storage
   private async saveNew(group: chrome.tabGroups.TabGroup): Promise<void> {
      const newTabGroup = {
         id: group.id,
         color: group.color,
         title: group.title || '',
         tabs: [],
         createdAt: Date.now(),
      };
      //// await chrome.storage.local.set({
      ////    [`${group.id}`]: newTabGroup,
      //// });
      await this.saveToSavedGroups(newTabGroup);
      await this.saveToSavedTitles(group);
   }

   // updates existing tab group on local storage with new values
   private async update(
      group: chrome.tabGroups.TabGroup,
      previousGroup: LocalStorageTabGroup
   ): Promise<void> {
      const updatedGroup = {
         id: previousGroup.id,
         color: group.color,
         title: group.title || '',
         tabs: previousGroup.tabs,
         createdAt: previousGroup.createdAt,
      };
      //// await chrome.storage.local.set({ [`${updatedGroup.id}`]: updatedGroup });
      await this.saveToSavedGroups(updatedGroup);
      await this.saveToSavedTitles(group);
   }

   // saves new tab group to local storage
   private async saveToSavedGroups(group: LocalStorageTabGroup): Promise<void> {
      const groups = (await this.getKey('groups')) as LocalStorageTabGroups;
      groups[group.id] = group;
      await chrome.storage.local.set({ ['groups']: groups });
   }

   // saves group id to saved titles in class and updates local storage
   private async saveToSavedTitles(
      group: chrome.tabGroups.TabGroup
   ): Promise<void> {
      //// const currentTitles = this.savedTitles;
      const title = group.title !== undefined ? group.title : '';
      const savedTitles = (await this.getKey(
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
   private async deleteFromGroups(id: number) {
      const groups = (await this.getKey('groups')) as LocalStorageTabGroups;
      delete groups[id];
      await chrome.storage.local.set({ ['groups']: groups });
   }

   // deletes group tab from saved titles local storage dictionary
   private async deleteFromSavedTitles(id: number) {
      const savedTitles = (await this.getKey(
         'savedTitles'
      )) as LocalStorageTitles;
      for (const titleKey in savedTitles) {
         const idList = savedTitles[`${titleKey}`];
         if (idList.includes(id)) {
            if (idList.length == 1) {
               delete savedTitles[titleKey];
            } else {
               const index = idList.indexOf(id);
               idList.splice(index, 1);
               savedTitles[titleKey] = idList;
            }
         }
      }
      await chrome.storage.local.set({ ['savedTitles']: savedTitles });
   }

   // use to print general debugging information
   async debug(group?: chrome.tabGroups.TabGroup) {
      const all = await chrome.storage.local.get(null);
      console.log('all: ', all);
      if (group !== undefined) {
         const info = await this.getGroupFromStorage(group.id);
         console.log('info: ', info);
      }
   }
}

export { TabGroupUtil };
