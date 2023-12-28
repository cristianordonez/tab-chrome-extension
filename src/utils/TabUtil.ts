import { ColorEnum, FormattedTabs, TabOptions } from '../types';
import CurrentTabGroups from './CurrentTabGroups';
import FormattedTab from './FormattedTab';

/**
 * Utility Class for working with current tabs and Chrome tabs API
 * Create new instances using build method, which takes the tabId as a parameter
 */
class TabUtil {
   private tab: chrome.tabs.Tab;

   constructor(tab: chrome.tabs.Tab) {
      this.tab = tab;
   }

   /**
    * Used to instantiate new instances of this class given tabId
    * @param tabId unique id of given tab
    * @returns new TabUtil class instance
    */
   public static async build(tabId: number): Promise<TabUtil> {
      const tab = await chrome.tabs.get(tabId);
      return new TabUtil(tab);
   }

   /**
    * Get current tabId
    * @returns tabId
    */
   public getTabId(): number {
      const result = this.tab.id;
      return result ? result : -1;
   }

   /**
    * Gets the url from current instance
    * @returns full url string
    */
   public getUrl(): string {
      return this.tab.url || '';
   }

   /**
    *
    * @param groupName name of group to open tab in
    * @param groupColor color of group tab will be opened in
    */
   public async openInGroup(
      groupColor: undefined | ColorEnum,
      groupName: undefined | string
   ): Promise<void> {
      if (groupName) {
         const groups = await CurrentTabGroups.query(groupName);
         const tabId = this.getTabId();
         if (groups.length > 0) {
            const currentGroup = groups[0];
            await CurrentTabGroups.addTabs(currentGroup.id, tabId);
         } else {
            await CurrentTabGroups.create(groupName, [tabId], groupColor);
         }
      } else {
         throw new Error(
            'Rules with action of 0 must have a groupName defined.'
         );
      }
   }

   /**
    * pins current tab
    */
   public async pin() {
      const tabId = this.getTabId();
      await chrome.tabs.update(tabId, { pinned: true });
   }

   /**
    * Moves current tab to new chrome window
    */
   public async moveToNewWindow() {
      const tabId = this.getTabId();
      await chrome.windows.create({ tabId });
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
    * closes a currently open tab
    * @param tabIds list of tab ids to close
    */
   public static async close(tabIds: number[]): Promise<void> {
      await chrome.tabs.remove(tabIds);
   }
}

export default TabUtil;
