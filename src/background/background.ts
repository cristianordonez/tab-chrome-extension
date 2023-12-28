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
   const storage = await chrome.storage.local.get(null);
   const rules = await Rule.getAll();
   // const rule = new Rule(
   //    'TEST RULE 1',
   //    0,
   //    [{ url: 'hostname', match: 'contains', query: 'google' }],
   //    uuidv4(),
   //    'GOOGLE',
   //    'blue'
   // );
   // rule.save();
   // const rule2 = new Rule(
   //    'TEST RULE 3',
   //    2,
   //    [{ url: 'hostname', match: 'contains', query: 'lululemon' }],
   //    uuidv4(),
   //    'TEST ACTION 2',
   //    'red'
   // );
   // rule2.save();
   // rules[0].update({ groupColor: 'red' });
   console.log('storage: ', storage);
   console.log('rules: ', rules);
   if (tab.url && changeInfo.status == 'loading') {
      await Rule.findMatch(tabId);
   }
});
