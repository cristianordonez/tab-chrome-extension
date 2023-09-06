// creates new tab with given url or new tab page, returning tab id
const createTab = (
   active: boolean = false,
   url: string | undefined = undefined,
   pinned: boolean = false
): Promise<chrome.tabs.Tab> => {
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
};

export { createTab };
