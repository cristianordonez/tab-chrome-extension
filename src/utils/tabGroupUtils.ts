const getTabGroupInfo = async (
   groupId: number,
   windowId: number | undefined
): Promise<chrome.tabGroups.TabGroup> => {
   if (groupId == -1) {
      return {
         collapsed: false,
         color: 'grey',
         id: -1,
         title: 'Ungrouped',
         windowId: windowId || 0,
      };
   } else {
      const groupInfo = await chrome.tabGroups.get(groupId);
      console.log('groupInfo: ', groupInfo);
      return groupInfo;
   }
};

export { getTabGroupInfo };
