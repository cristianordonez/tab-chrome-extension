import { StorageGroupValue, TabGroup } from '../types';
import { getAllTabs } from './tabUtils';

// get all info for a tab group from groupId
const getTabGroupInfo = async (
   groupId: number,
   windowId: number | undefined
): Promise<chrome.tabGroups.TabGroup> => {
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
};

// get all currently active tab groups
const getCurrentTabGroups = async (): Promise<chrome.tabGroups.TabGroup[]> => {
   const groups = await chrome.tabGroups.query({});
   return groups;
};

// save newly created tab group to storage
const saveNewTabGroup = async (
   group: chrome.tabGroups.TabGroup
): Promise<StorageGroupValue> => {
   const newTabGroup = {
      id: group.id,
      color: group.color,
      title: group.title || '',
      tabs: [],
   };
   await chrome.storage.local.set({
      [group.id]: newTabGroup,
   });
   return newTabGroup;
};

// updates all values for a tab group with changes
const updateTabGroup = async (
   group: chrome.tabGroups.TabGroup,
   previousGroup: StorageGroupValue
): Promise<StorageGroupValue> => {
   const updatedGroup = {
      id: previousGroup.id,
      color: group.color,
      title: group.title || '',
      tabs: previousGroup.tabs,
   };
   await chrome.storage.local.set({ [group.id]: updatedGroup });
   return updatedGroup;
};

// get tab group using id from storage
const getTabGroupFromStorage = async (
   id: number
): Promise<StorageGroupValue | null> => {
   try {
      const tabGroup = await chrome.storage.local.get([`${id}`]);
      return tabGroup[`${id}`];
   } catch {
      return null;
   }
};

// reduce list of tabs into object of group id key to list of tab values
const getTabsByGroup = async (): Promise<TabGroup> => {
   const allTabs = await getAllTabs();
   const tabGroups = allTabs.reduce((previousObject, currentObject) => {
      const groupId = currentObject['groupId'];
      if (
         Object.prototype.hasOwnProperty.call(previousObject, groupId) == false
      ) {
         previousObject[groupId] = [];
      }
      const currentItems = previousObject[groupId];
      return Object.assign(previousObject, {
         [currentObject.groupId]: [...currentItems, currentObject],
      });
   }, {} as TabGroup);
   return tabGroups;
};

// takes snapshot of current tabs/tab group and saves to storage
const takeTabSnapshotAll = async (): Promise<void> => {
   const currentTabs = await getTabsByGroup();
   console.log('currentTabs: ', currentTabs);
};

// takes snapshot of specific group only and saves to chrome storage
const takeTabSnapshotForGroup = async (groupId: number): Promise<void> => {
   const currentTabs = await getTabsByGroup();
   console.log('currentTabs: ', currentTabs);
};

export {
   getCurrentTabGroups,
   getTabGroupFromStorage,
   getTabGroupInfo,
   getTabsByGroup,
   saveNewTabGroup,
   takeTabSnapshotAll,
   takeTabSnapshotForGroup,
   updateTabGroup,
};
