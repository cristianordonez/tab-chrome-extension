// A piece of code launched when the extension launched,
// and won’t be terminated until extension removed or browser shutdown.
// Background code has access to all Chrome APIs,
// and other parts are limited.But the background doesn’t have a UI and can not access DOM.

import { runtime } from 'webextension-polyfill';
import { getCurrentTab } from '../utils/getCurrentTab';

runtime.onInstalled.addListener(async () => {
   const tabs = await getCurrentTab();
   console.log('tabs: ', tabs);
});
