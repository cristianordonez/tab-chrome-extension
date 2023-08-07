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

export { getAllTabs, getCurrentTab };
