import { AllTabsType, StorageGroup, StorageGroupValue } from '../types';

class TabGroupUtil {
   maxGroups;
   tabGroups;
   constructor(maxGroups: number) {
      this.maxGroups = maxGroups;
      this.tabGroups = {} as StorageGroup;
   }

   async initialize() {
      try {
         const groups = await chrome.storage.local.get(['groups']);
         this.tabGroups = groups;
         // this.tabGroups = groups['groups'];
      } catch {
         await chrome.storage.local.set({ ['groups']: {} });
      }
   }

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

   private async saveNewTabGroup(
      group: chrome.tabGroups.TabGroup
   ): Promise<void> {
      const newTabGroup = {
         id: group.id,
         color: group.color,
         title: group.title || '',
         tabs: [],
      };
      const currentGroups = this.tabGroups;
      currentGroups[`${group.id}`] = newTabGroup;
      await chrome.storage.local.set({
         ['groups']: currentGroups,
      });
      console.log('currentGroups in saveNewTabGroup: ', currentGroups);
      this.tabGroups = currentGroups;
   }

   private async updateTabGroup(
      group: chrome.tabGroups.TabGroup,
      previousGroup: StorageGroupValue
   ): Promise<void> {
      const updatedGroup = {
         id: previousGroup.id,
         color: group.color,
         title: group.title || '',
         tabs: previousGroup.tabs,
      };
      const currentGroups = this.tabGroups;
      currentGroups[updatedGroup.id] = updatedGroup;
      await chrome.storage.local.set({ ['groups']: currentGroups });
      console.log('currentGroups in updateTabGroup: ', currentGroups);
      this.tabGroups = currentGroups;
   }

   getTabGroupFromStorage(groupId: number): StorageGroupValue | null {
      const currentGroups = this.tabGroups;
      if (Object.prototype.hasOwnProperty.call(currentGroups, groupId)) {
         return currentGroups[`${groupId}`];
      } else {
         return null;
      }
   }

   tabGroupTitleExists(title: string): boolean {
      // returns true if name already exists
      const currentGroups = this.tabGroups;
      let doesExist = false;
      return false;
   }

   async updateOrCreateTabGroup(group: chrome.tabGroups.TabGroup) {
      const currentGroup = this.tabGroups;
      console.log('this: ', this);
      console.log('this.tabGroups: ', this.tabGroups);

      console.log('group: ', group);
      console.log('currentGroup: ', currentGroup);
      if (Object.prototype.hasOwnProperty.call(currentGroup, group.id)) {
         this.updateTabGroup(group, currentGroup[`${group.id}`]);
      } else {
         this.saveNewTabGroup(group);
      }
   }

   static async getTabsByGroup(): Promise<AllTabsType> {
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
      }, {} as AllTabsType);
      return tabGroups;
   }

   async takeTabSnapshotAll(): Promise<void> {
      const currentTabs = await TabGroupUtil.getTabsByGroup();
      console.log('currentTabs: ', currentTabs);
   }

   async takeTabSnapshotForGroup(groupId: number): Promise<void> {
      console.log('groupId: ', groupId);
      const currentTabs = await TabGroupUtil.getTabsByGroup();
      console.log('currentTabs: ', currentTabs);
   }
}

export { TabGroupUtil };
