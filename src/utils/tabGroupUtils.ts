import { StorageGroup } from '../types';

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
      console.log('groupInfo: ', groupInfo);
      return groupInfo;
   }
};

const getTabGroups = async (): Promise<chrome.tabGroups.TabGroup[]> => {
   const groups = await chrome.tabGroups.query({});
   return groups;
};

const saveNewTabGroup = async (
   group: chrome.tabGroups.TabGroup
): Promise<number> => {
   // const currentGroups = await chrome.storage.local.get(['groups']);
   // if (!currentGroups) {
   //    await chrome.storage.local.set({ groups: {} });
   // }
   const newTabGroup = { ...group, tabs: [] };
   await chrome.storage.local.set({
      [group.id]: newTabGroup,
      // ['groups']: { ...currentGroups.groups, [newTabGroup.id]: newTabGroup },
   });
   return newTabGroup.id;
};

const updateTabGroup = async (
   group: chrome.tabGroups.TabGroup,
   previousGroup: StorageGroup
): Promise<number> => {
   // const currentGroups = await chrome.storage.local.get(['groups']);
   // const currentGroup = await chrome.storage.local.get([group.id]);
   // const previousValues = currentGroups.groups[group.id];
   const updatedGroup = { ...previousGroup, ...group };
   // await chrome.storage.local.set({ ['groups']: currentGroups.groups });
   await chrome.storage.local.set({ [group.id]: updatedGroup });
   return group.id;
};
export { getTabGroupInfo, getTabGroups, saveNewTabGroup, updateTabGroup };
