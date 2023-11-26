import { FormattedTabs, TabOptions } from '../types';
import FormattedTab from './FormattedTab';

/**
 * Utility Class for working with current tabs and Chrome tabs API
 */
class TabUtil {
   private tab: chrome.tabs.Tab;

   constructor(tab: chrome.tabs.Tab) {
      this.tab = tab;
   }

   /**
    * Used to instantiate new instances of this class
    * @param tabId unique id of given tab
    * @returns new TabUtil class instance
    */
   public static async build(tabId: number): Promise<TabUtil> {
      const tab = await chrome.tabs.get(tabId);
      return new TabUtil(tab);
   }

   public getUrl(): string {
      return this.tab.url || '';
   }

   // formats array of tabs into tabs with checked configuration
   public static formatTabs(tabs: chrome.tabs.Tab[]) {
      return tabs.reduce(
         (accumulator, currentValue) => {
            const currentTab = new FormattedTab(currentValue);
            if (currentValue.id) {
               accumulator[currentValue.id] = currentTab;
            }
            return accumulator;
         },
         {} as unknown as FormattedTabs
      );
   }

   /**
    * Create new tab
    * @param options TabOptions interface
    * @param blocking if true, will wait until tab has loaded before continuing, defaults to false
    * @returns chrome.tabs.Tab instance
    */
   public static async create(
      options: TabOptions,
      blocking: boolean = false
   ): Promise<chrome.tabs.Tab> {
      if (blocking) {
         return new Promise((resolve) => {
            chrome.tabs.create({ ...options, active: false }, async (tab) => {
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
      } else {
         const tab = await chrome.tabs.create({ ...options, active: false });
         return tab;
      }
   }

   /**
    * Find all current tabs from all windows
    * @returns list of currently active tabs
    */
   public static async getAll(): Promise<chrome.tabs.Tab[]> {
      const allTabs = await chrome.tabs.query({});
      return allTabs;
   }

   /**
    * Get all tabs belonging to specific group
    * @param groupId unique id from chrome tab group
    * @returns list of all tabs matching given group id
    */
   public static async get(groupId: number): Promise<chrome.tabs.Tab[]> {
      const tabInfo = await chrome.tabs.query({ groupId });
      return tabInfo;
   }

   public static async close(tabIds: number[]): Promise<void> {
      await chrome.tabs.remove(tabIds);
   }

   public static async group(
      tabIds: undefined | number | number[],
      groupId?: number
   ): Promise<number> {
      const newGroupNumber = await chrome.tabs.group({ groupId, tabIds });
      return newGroupNumber;
   }
}

export default TabUtil;
