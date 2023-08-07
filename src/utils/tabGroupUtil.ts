import { StorageGroupValue, TabGroup } from '../types';
import { getAllTabs } from './tabUtils';

class TabGroupUtil {
   maxGroups;
   constructor(maxGroups: number) {
      this.maxGroups = maxGroups;
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

   async saveNewTabGroup(
      group: chrome.tabGroups.TabGroup
   ): Promise<StorageGroupValue> {
      const newTabGroup = {
         id: group.id,
         color: group.color,
         title: group.title || '',
         tabs: [],
      };
      // todo only save group if there is less than 5 saved
      await chrome.storage.local.set({
         [group.title || '']: newTabGroup,
         // // [group.id]: newTabGroup,
      });
      return newTabGroup;
   }

   async updateTabGroup(
      group: chrome.tabGroups.TabGroup,
      previousGroup: StorageGroupValue
   ): Promise<StorageGroupValue> {
      const updatedGroup = {
         id: previousGroup.id,
         color: group.color,
         title: group.title || '',
         tabs: previousGroup.tabs,
      };
      await chrome.storage.local.set({ [group.title || '']: updatedGroup });
      return updatedGroup;
   }

   async getTabGroupFromStorage(
      title: string
   ): Promise<StorageGroupValue | null> {
      try {
         const tabGroup = await chrome.storage.local.get([`${title}`]);
         return tabGroup[`${title}`];
      } catch {
         return null;
      }
   }

   async updateOrCreateTabGroup(group: chrome.tabGroups.TabGroup) {
      const currentGroup = await this.getTabGroupFromStorage(group.title || '');
      if (currentGroup) {
         this.updateTabGroup(group, currentGroup);
      } else {
         this.saveNewTabGroup(group);
      }
   }

   async getTabsByGroup(): Promise<TabGroup> {
      const allTabs = await getAllTabs();
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
      }, {} as TabGroup);
      return tabGroups;
   }

   async takeTabSnapshotAll(): Promise<void> {
      const currentTabs = await this.getTabsByGroup();
      console.log('currentTabs: ', currentTabs);
   }

   async takeTabSnapshotForGroup(groupId: number): Promise<void> {
      console.log('groupId: ', groupId);
      const currentTabs = await this.getTabsByGroup();
      console.log('currentTabs: ', currentTabs);
   }
}

export { TabGroupUtil };
