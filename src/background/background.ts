import { saveNewTabGroup, updateTabGroup } from '../utils/tabGroupUtils';
// A piece of code launched when the extension launched,
// and won’t be terminated until extension removed or browser shutdown.
// Background code has access to all Chrome APIs,
// and other parts are limited. But the background doesn’t have a UI and can not access DOM.
// background script will be used to save any newly created tab groups to chrome storage

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
   try {
      const currentGroup = await chrome.storage.local.get([group.id]);
      updateTabGroup(group, currentGroup[group.id]);
   } catch {
      saveNewTabGroup(group);
   }
   //    if (Object.prototype.hasOwnProperty.call(currentGroups.groups, group.id)) {
});

chrome.tabs.onUpdated.addListener(async function (
   tabId: number,
   changeInfo: object,
   tab: chrome.tabs.Tab
) {
   const groupId = tab.groupId;
   //    await chrome.storage.local.clear();
   if (groupId !== -1) {
      chrome.storage.local
         .get(null)
         .then((result) => console.log('all options: ', result));
   }
});
