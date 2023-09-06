import { ColorEnum } from '../types';

class CurrentTabGroups {
   // close current tab group
   static async delete(groupId: number): Promise<void> {
      try {
         const tabGroups = await chrome.tabs.query({ groupId });
         const tabIds = tabGroups.reduce((accumulator, currentValue) => {
            if (currentValue.id) {
               accumulator.push(currentValue.id);
            }
            return accumulator;
         }, [] as number[]);
         await chrome.tabs.remove(tabIds);
      } catch (err) {
         console.error(err);
      }
   }

   // creates and opens new tab group, returning group id of created group
   static async create(
      title: string = '',
      tabIds?: number[],
      color?: ColorEnum
   ): Promise<number | undefined> {
      try {
         let newGroupTabs;
         if (!tabIds) {
            const newTab = await CurrentTabGroups.createTab();
            newGroupTabs = newTab.id;
         } else {
            newGroupTabs = tabIds;
         }
         const newGroupId = await chrome.tabs.group({ tabIds: newGroupTabs });
         await chrome.tabGroups.update(newGroupId, { color, title });
         return newGroupId;
      } catch (err) {
         console.error(err);
         return;
      }
   }

   // deletes one or more tabs from group with given group id
   static async removeTab(tabIds: number[]) {
      await chrome.tabs.remove(tabIds);
   }

   // updates existing tab group by adding given tabs to it, and creating new tab if needed
   static async update(
      groupId: number,
      tabIds?: number | number[]
   ): Promise<void> {
      try {
         const groupDetails = await CurrentTabGroups.getInfo(groupId);
         if (groupDetails !== null) {
            let newGroupTabs;
            if (!tabIds) {
               const newTab = await CurrentTabGroups.createTab();
               newGroupTabs = newTab.id;
            } else {
               newGroupTabs = tabIds;
            }
            await chrome.tabs.group({ groupId, tabIds: newGroupTabs });
         } else {
            throw new Error(
               'Given group does not exist. Unable to add tab to it.'
            );
         }
      } catch (err) {
         console.error(err);
         return;
      }
   }

   // gets active tab groups
   static async get(): Promise<number[]> {
      const allTabs = await chrome.tabs.query({});
      const groupIds = allTabs.reduce((accumulator, currentValue) => {
         if (currentValue.groupId) {
            const currentId = currentValue.groupId;
            if (accumulator.includes(currentId) == false) {
               accumulator.push(currentId);
            }
         }
         return accumulator;
      }, [] as number[]);
      return groupIds;
   }

   // given groupId will get all information about given tab group from chrome API
   static async getInfo(groupId: number): Promise<chrome.tabGroups.TabGroup> {
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

   // creates new tab with given url or new tab page, returning tab id
   static async createTab(
      active: boolean = false,
      url: string | undefined = undefined,
      pinned: boolean = false
   ): Promise<chrome.tabs.Tab> {
      return new Promise((resolve) => {
         chrome.tabs.create({ url, active, pinned }, async (tab) => {
            chrome.tabs.onUpdated.addListener(function listener(
               tabId: number,
               info: chrome.tabs.TabChangeInfo
            ) {
               if (info.status === 'complete' && tabId === tab.id) {
                  chrome.tabs.onUpdated.removeListener(listener);
                  resolve(tab);
               }
            });
         });
      });
   }
}

export default CurrentTabGroups;
