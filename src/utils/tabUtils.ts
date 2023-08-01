import { TabGroup } from '../types';

// reduce tabs to better data structure
const reduceTabs = (tabs: chrome.tabs.Tab[]): TabGroup => {
   const tabGroups = tabs.reduce((previousObject, currentObject) => {
      const groupId = currentObject['groupId'];
      if (
         Object.prototype.hasOwnProperty.call(previousObject, groupId) == false
      ) {
         previousObject[groupId] = [];
      }
      const currentItems = previousObject[groupId];
      return Object.assign(previousObject, {
         [currentObject.groupId]: [...currentItems, currentObject],
      });
   }, {} as TabGroup);
   return tabGroups;
};

// get currently active tab
const getCurrentTab = async () => {
   const current = await chrome.tabs.getCurrent();
   return current;
};

// get all currently active tabs
const getAllTabs = async () => {
   const allTabs = await chrome.tabs.query({});
   return allTabs;
};

const getTabGroups = async () => {
   // const groups = await chrome.t
};

export { getAllTabs, getCurrentTab, getTabGroups, reduceTabs };
