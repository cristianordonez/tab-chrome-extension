import {
   getTabGroupFromStorage,
   saveNewTabGroup,
   takeTabSnapshotAll,
   updateTabGroup,
} from '../utils/tabGroupUtils';
// A piece of code launched when the extension launched,
// and won’t be terminated until extension removed or browser shutdown.
// Background code has access to all Chrome APIs,
// and other parts are limited. But the background doesn’t have a UI and can not access DOM.

// save tab group to storage
chrome.tabGroups.onCreated.addListener(async function (
   group: chrome.tabGroups.TabGroup
) {
   await saveNewTabGroup(group);
});

// update saved tab group info to storage
chrome.tabGroups.onUpdated.addListener(async function (
   group: chrome.tabGroups.TabGroup
) {
   const currentGroup = await getTabGroupFromStorage(group.id);
   if (currentGroup) {
      updateTabGroup(group, currentGroup);
   } else {
      saveNewTabGroup(group);
   }
});

chrome.tabs.onUpdated.addListener(async function (
   tabId: number,
   changeInfo: object,
   tab: chrome.tabs.Tab
) {
   console.log('changeInfo: ', changeInfo);
   // console.log('tab: ', tab);
   console.log('tab: ', tab);
   await takeTabSnapshotAll();

   // await addTabToTabGroup(tab);
   // const all_storage = await chrome.storage.local.get(null);
   // console.log('all_storage: ', all_storage);
   // todo if changeInfo contains groupId, then delete
});
