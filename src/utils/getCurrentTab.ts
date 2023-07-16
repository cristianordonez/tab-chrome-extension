import { tabs } from 'webextension-polyfill';

async function getCurrentTab() {
   const current = tabs.getCurrent();
   return current;
}

export { getCurrentTab };
