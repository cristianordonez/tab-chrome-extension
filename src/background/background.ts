/**
 * A piece of code launched when the extension launched,
 * and won’t be terminated until extension removed or browser shutdown.
 * Background code has access to all Chrome APIs,
 * and other parts are limited. But the background doesn’t have a UI and can not access DOM.
 */

// import { v4 as uuidv4 } from 'uuid';
import Rule from '../utils/Rule';
import { savedTabGroupsInstance } from '../utils/SavedTabGroups';

/**
 * Listens for hotkeys defined in manifest.json
 */
chrome.commands.onCommand.addListener(async function (command) {
   if (command === 'take_snapshot') {
      await savedTabGroupsInstance.takeSnapshot();
   }
});

/**
 * Executes scripts on urls that match given info
 */
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
   const storage = await chrome.storage.local.get(null);
   console.log('storage: ', storage);
   // const rule = new Rule(
   //    'TEST RULE 1',
   //    0,
   //    [
   //       {
   //          url: 'hostname',
   //          match: 'contains',
   //          query: 'stackoverflow',
   //          id: uuidv4(),
   //       },
   //    ],
   //    uuidv4(),
   //    true,
   //    'Stackoverflow',
   //    'blue'
   // );
   // rule.save();
   if (tab.url && changeInfo.status == 'loading') {
      await Rule.findMatch(tabId);
   }
});
