import { ColorEnum } from '../types';
import TabUtil from './TabUtil';

class CurrentTabGroups {
   // close current tab group
   public static async delete(groupId: number): Promise<void> {
      try {
         const tabGroups = await TabUtil.get(groupId);
         const tabIds = tabGroups.reduce((accumulator, currentValue) => {
            if (currentValue.id) {
               accumulator.push(currentValue.id);
            }
            return accumulator;
         }, [] as number[]);
         await TabUtil.close(tabIds);
      } catch (err) {
         console.error(err);
      }
   }

   // creates and opens new tab group, returning group id of created group
   public static async create(
      title: string = '',
      tabIds?: number[],
      color?: ColorEnum
   ): Promise<number | undefined> {
      try {
         let newGroupTabs;
         if (!tabIds) {
            const newTab = await TabUtil.create({}, true);
            newGroupTabs = newTab.id;
         } else {
            newGroupTabs = tabIds;
         }
         const newGroupId = await TabUtil.group(newGroupTabs);
         await chrome.tabGroups.update(newGroupId, { color, title });
         return newGroupId;
      } catch (err) {
         console.error(err);
         return;
      }
   }

   // updates existing tab group by adding given tabs to it, and creating new tab if needed
   public static async addTabs(
      groupId: number,
      tabIds?: number | number[]
   ): Promise<void> {
      console.log('groupId in addTabs: ', groupId);
      try {
         const groupDetails = await CurrentTabGroups.getInfo(groupId);
         if (groupDetails !== null) {
            let newGroupTabs;
            if (!tabIds) {
               const newTab = await TabUtil.create({}, true);
               newGroupTabs = newTab.id;
            } else {
               newGroupTabs = tabIds;
            }
            await TabUtil.group(newGroupTabs, groupId);
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
   public static async get(): Promise<number[]> {
      const allTabs = await TabUtil.getAll();
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
   public static async getInfo(
      groupId: number
   ): Promise<chrome.tabGroups.TabGroup | null> {
      if (groupId == -1) {
         return {
            collapsed: false,
            color: 'grey',
            id: -1,
            title: 'Ungrouped',
            windowId: 0,
         };
      } else {
         try {
            const groupInfo = await chrome.tabGroups.get(groupId);
            return groupInfo;
         } catch (err) {
            console.error(err);
            return null;
         }
      }
   }
}

export default CurrentTabGroups;
