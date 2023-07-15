// A piece of code launched when the extension launched, 
// and won’t be terminated until extension removed or browser shutdown.
// Background code has access to all Chrome APIs, 
// and other parts are limited.But the background doesn’t have a UI and can not access DOM.

import { runtime, tabs } from 'webextension-polyfill'


async function getCurrentTab() {
  const list = await tabs.query({ active: true, currentWindow: true })
  return list[0]
}

runtime.onInstalled.addListener(async () => {
    const tabs = await getCurrentTab()
    console.log('tabs: ', tabs);
})