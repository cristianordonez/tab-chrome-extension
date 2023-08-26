import React, { useEffect, useState } from 'react';
import { ChromeTabs } from '../../../types';
import { TabGroupUtil } from '../../../utils/tabGroupUtil';
import RowGroup from '../../components/RowGroup';

export default function CurrentGroups() {
   const [currentTabs, setCurrentTabs] = useState<ChromeTabs>({});

   useEffect(() => {
      const getTabs = async () => {
         const tabGroups = await TabGroupUtil.getTabsByGroup();
         setCurrentTabs(tabGroups);
      };
      getTabs();
   }, []);

   return (
      <>
         {Object.keys(currentTabs).map((groupId) => (
            <RowGroup
               key={groupId}
               groupId={Number(groupId)}
               windowId={currentTabs[Number(groupId)][0].windowId}
               tabs={currentTabs[Number(groupId)]}
            />
         ))}
      </>
   );
}
