/**
 * A piece of code launched when the extension launched,
 * and won’t be terminated until extension removed or browser shutdown.
 * Background code has access to all Chrome APIs,
 * and other parts are limited. But the background doesn’t have a UI and can not access DOM.
 */

import Rule from '../utils/Rule';
import { savedTabGroupsInstance } from '../utils/SavedTabGroups';

/** Listens for hotkeys defined in manifest.json */
chrome.commands.onCommand.addListener(async function (command) {
   if (command === 'take_snapshot') {
      await savedTabGroupsInstance.takeSnapshot();
   }
});

/**
 * TODO Executes scripts on urls that match given info
 */
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
   // Check if the current URL matches one of the user's selected URLs.
   if (tab.url) {
      // if (changeInfo.status == 'complete') {
      await Rule.findMatch(tabId);
      // }
   }
});
