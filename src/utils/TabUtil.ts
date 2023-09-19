interface TabOptions {
   url?: string | undefined;
   pinned?: boolean;
}

class TabUtil {
   // if blocking is true, will await from tab to complete loading
   static async create(
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

   static async getAll(): Promise<chrome.tabs.Tab[]> {
      const allTabs = await chrome.tabs.query({});
      return allTabs;
   }

   static async get(groupId: number): Promise<chrome.tabs.Tab[]> {
      const tabInfo = await chrome.tabs.query({ groupId });
      return tabInfo;
   }

   static async close(tabIds: number[]): Promise<void> {
      await chrome.tabs.remove(tabIds);
   }

   static async group(
      tabIds: undefined | number | number[],
      groupId?: number
   ): Promise<number> {
      const newGroupNumber = await chrome.tabs.group({ groupId, tabIds });
      return newGroupNumber;
   }
}

export default TabUtil;
