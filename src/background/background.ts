// A piece of code launched when the extension launched,
// and won’t be terminated until extension removed or browser shutdown.
// Background code has access to all Chrome APIs,
// and other parts are limited. But the background doesn’t have a UI and can not access DOM.
import { TabGroupUtil } from '../utils/tabGroupUtil';

const tabGroupUtil = new TabGroupUtil(5, 1);
TabGroupUtil.initialize();

// chrome.storage.local.clear();

// todo find better event listener to target
chrome.tabs.onUpdated.addListener(async function (
   tabId: number,
   changeInfo: object,
   tab: chrome.tabs.Tab
) {
   if ('status' in changeInfo && changeInfo['status'] == 'complete') {
      console.log('tab: ', tab);
      await tabGroupUtil.takeSnapshot();
      await tabGroupUtil.debug();
   }
});
