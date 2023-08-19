// A piece of code launched when the extension launched,
// and won’t be terminated until extension removed or browser shutdown.
// Background code has access to all Chrome APIs,
// and other parts are limited. But the background doesn’t have a UI and can not access DOM.
import { TabGroupUtil } from '../utils/tabGroupUtil';

const tabGroupUtil = new TabGroupUtil(5, 1);
tabGroupUtil.initialize();

// chrome.storage.local.clear();
chrome.tabGroups.onRemoved.addListener(async function (
   group: chrome.tabGroups.TabGroup
) {
   await tabGroupUtil.updateOrCreateTabGroup(group);
   await tabGroupUtil.debug(group);
});

chrome.tabs.onUpdated.addListener(async function (
   tabId: number,
   changeInfo: object,
   tab: chrome.tabs.Tab
) {
   // console.log('tab: ', tab);
   if ('status' in changeInfo && changeInfo['status'] == 'complete') {
      console.log('changeInfo: ', changeInfo);
   }
   // await tabGroupUtil.takeTabSnapshotAll();
});
