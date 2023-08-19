// A piece of code launched when the extension launched,
// and won’t be terminated until extension removed or browser shutdown.
// Background code has access to all Chrome APIs,
// and other parts are limited. But the background doesn’t have a UI and can not access DOM.
import { TabGroupUtil } from '../utils/tabGroupUtil';

const tabGroupUtil = new TabGroupUtil(5);
tabGroupUtil.initialize();

chrome.tabGroups.onUpdated.addListener(async function (
   group: chrome.tabGroups.TabGroup
) {
   await tabGroupUtil.updateOrCreateTabGroup(group);
});

chrome.tabs.onUpdated.addListener(async function (
   tabId: number,
   changeInfo: object,
   tab: chrome.tabs.Tab
) {
   // console.log('tab: ', tab);
   const all = await chrome.storage.local.get(null);
   console.log('all: ', all);
   await tabGroupUtil.takeTabSnapshotAll();
});
