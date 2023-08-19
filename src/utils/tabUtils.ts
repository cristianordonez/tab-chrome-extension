// get all currently active tabs
const getAllTabs = async () => {
   const allTabs = await chrome.tabs.query({});
   return allTabs;
};

export { getAllTabs };
