// A piece of code launched when the extension launched,
// and won’t be terminated until extension removed or browser shutdown.
// Background code has access to all Chrome APIs,
// and other parts are limited. But the background doesn’t have a UI and can not access DOM.

import { savedTabGroupsInstance } from '../utils/SavedTabGroups';

// listens for hotkeys defined in manifest.json
chrome.commands.onCommand.addListener(async function (command) {
   if (command === 'take_snapshot') {
      await savedTabGroupsInstance.takeSnapshot();
   }
});
