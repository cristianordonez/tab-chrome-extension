import {
   ChromeTabs,
   LocalStorageTabGroup,
   LocalStorageTabGroups,
   LocalStorageTitles,
} from '../types';

class TabGroupUtil {
   maxGroups;
   maxTitleDuplicates;
   groups;
   savedTitles;
   constructor(maxGroups: number, maxTitleDuplicates: number) {
      this.maxGroups = maxGroups;
      this.maxTitleDuplicates = maxTitleDuplicates;
      this.groups = {} as LocalStorageTabGroups;
      this.savedTitles = {} as LocalStorageTitles;
   }

   // gets groups and savedTitles from local storage and saves to class, or sets to default values
   async initialize() {
      const savedTitles = await chrome.storage.local.get(['savedTitles']);
      console.log('savedTitles: ', savedTitles);
      if ('savedTitles' in savedTitles) {
         this.savedTitles = savedTitles.savedTitles;
      } else {
         await chrome.storage.local.set({ ['savedTitles']: {} });
      }
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

   // given groupId will get all information about given tab group
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

   // checks if given group exists in current cache before creating or updating it
   async updateOrCreateTabGroup(group: chrome.tabGroups.TabGroup) {
      const groupInfo = await chrome.storage.local.get([`${group.id}`]);
      const limitReached = await this.titleLimitReached(group);
      if (limitReached) {
         const oldest = await this.findOldestTabGroup(group.title || '');
         console.log('oldest: ', oldest);
         if (oldest !== null) {
            this.deleteTabGroup(oldest);
         }
      }
      if (Object.keys(groupInfo).length == 0) {
         this.saveNewTabGroup(group);
      } else {
         this.updateTabGroup(group, groupInfo[`${group.id}`]);
      }
   }

   async debug(group?: chrome.tabGroups.TabGroup) {
      const all = await chrome.storage.local.get(null);
      console.log('all: ', all);
      if (group !== undefined) {
         console.log('group: ', group);
         const info = await this.getGroupFromStorage(group.id);
         console.log('info: ', info);
      }
   }

   // uses tab group id to delete item from local storage
   async deleteTabGroup(id: number) {
      try {
         await chrome.storage.local.remove([`${id}`]);
         for (const titleKey in this.savedTitles) {
            const idList = this.savedTitles[titleKey];
            if (idList.includes(id)) {
               const index = idList.indexOf(id);
               idList.splice(index, 1);
               this.savedTitles[titleKey] = idList;
            }
         }
         await chrome.storage.local.set({ ['savedTitles']: this.savedTitles });
      } catch (e) {
         console.error(e);
      }
   }

   // retrieves tab group information from local storage given group id
   private async getGroupFromStorage(id: number) {
      const savedGroup = await chrome.storage.local.get([`${id}`]);
      console.log('savedGroup: ', savedGroup);
      if (`${id}` in savedGroup) {
         return savedGroup[`${id}`];
      } else {
         return null;
      }
   }

   // finds group id of oldest tab group with same title
   private async findOldestTabGroup(title: string): Promise<number | null> {
      const oldest = Infinity;
      let result = null;
      const saved = this.savedTitles[title];
      console.log('saved: ', saved);
      for (let i = 0; i < saved.length; i++) {
         const current = await this.getGroupFromStorage(saved[i]);
         console.log('current: ', current);
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
      if (title in this.savedTitles) {
         const cachedIds = this.savedTitles[title];
         console.log('cachedIds in titleLimitReached: ', cachedIds);
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
   private async saveNewTabGroup(
      group: chrome.tabGroups.TabGroup
   ): Promise<void> {
      const newTabGroup = {
         id: group.id,
         color: group.color,
         title: group.title || '',
         tabs: [],
         createdAt: Date.now(),
      };
      await chrome.storage.local.set({
         [`${group.id}`]: newTabGroup,
      });
      this.saveToSavedTitles(group);
   }

   // saves group id to saved titles in class and updates local storage
   private async saveToSavedTitles(
      group: chrome.tabGroups.TabGroup
   ): Promise<void> {
      // const currentTitles = this.savedTitles;
      const title = group.title !== undefined ? group.title : '';
      if (title in this.savedTitles) {
         this.savedTitles[title].push(group.id);
      } else {
         this.savedTitles[title] = [group.id];
      }
      console.log('currentTitles before setting: ', this.savedTitles);
      await chrome.storage.local.set({ ['savedTitles']: this.savedTitles });
   }

   // updates existing tab group on local storage with new values
   private async updateTabGroup(
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
      await chrome.storage.local.set({ [`${updatedGroup.id}`]: updatedGroup });
      this.saveToSavedTitles(group);
   }
}

export { TabGroupUtil };
