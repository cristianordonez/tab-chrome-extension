import { ColorEnum } from '../types';
import TabUtil from './TabUtil';

/**
 * utility class for working with currently active tab groups and Chrome tabGroups API
 */
class CurrentTabGroups {
   // close current tab group
   public static async delete(groupId: number): Promise<void> {
      try {
         const tabGroups = await this.getTabs(groupId);
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
         const newGroupId = await this.groupTabs(newGroupTabs);
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
            await this.groupTabs(newGroupTabs, groupId);
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

   /**
    * group together currently active tabs into a group
    * @param tabIds list of tab ids to group together, or single id, or undefined
    * @param groupId group id to group tabs to, if doesnt exist will create new group
    * @returns id of group that was created
    */
   private static async groupTabs(
      tabIds: undefined | number | number[],
      groupId?: number
   ): Promise<number> {
      const newGroupNumber = await chrome.tabs.group({ groupId, tabIds });
      return newGroupNumber;
   }

   // gets active tab groups
   public static async getGroups(): Promise<number[]> {
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

   /**
    * Get all tabs belonging to specific group
    * @param groupId unique id from chrome tab group
    * @returns list of all tabs matching given group id
    */
   public static async getTabs(groupId: number): Promise<chrome.tabs.Tab[]> {
      const tabInfo = await chrome.tabs.query({ groupId });
      return tabInfo;
   }

   /**
    * get info from chrome API for given group
    * @param groupId id of given group to get info for
    * @returns instance of chrome.tabGroups.TabGroup or null if given group id does not exist
    */
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

   /**
    * Find all groups matching given title
    * @param title group title to search for
    * @returns array of TabGroups
    */
   public static async query(
      title: string
   ): Promise<chrome.tabGroups.TabGroup[]> {
      const groups = await chrome.tabGroups.query({ title });
      return groups;
   }
}

export default CurrentTabGroups;
