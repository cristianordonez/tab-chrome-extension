/**
 * A piece of code launched when the extension launched,
 * and won’t be terminated until extension removed or browser shutdown.
 * Background code has access to all Chrome APIs,
 * and other parts are limited. But the background doesn’t have a UI and can not access DOM.
 */

import { savedTabGroupsInstance } from '../utils/SavedTabGroups';

/** Listens for hotkeys defined in manifest.json */
chrome.commands.onCommand.addListener(async function (command) {
   if (command === 'take_snapshot') {
      await savedTabGroupsInstance.takeSnapshot();
   }
});

async function shouldExecuteScript(url: string | undefined): Promise<boolean> {
   console.log('url: ', url);
   if (url?.includes('example')) {
      return true;
   }
   return false;
}

function executeScript(tabId: number) {
   console.log('tabId: ', tabId);
   console.log('here');
}

/**
 * Executes scripts on urls that match given info
 */
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
   // Check if the current URL matches one of the user's selected URLs.
   console.log('changeInfo: ', changeInfo);
   if (
      changeInfo.status == 'complete' &&
      (await shouldExecuteScript(tab.url))
   ) {
      executeScript(tabId);
   }
});
