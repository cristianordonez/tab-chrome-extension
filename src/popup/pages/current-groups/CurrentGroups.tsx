import React, { useEffect, useState } from 'react';
import { TabGroup } from '../../../types';
import { getLastSession } from '../../../utils/sessionUtils';
import { getAllTabs, reduceTabs } from '../../../utils/tabUtils';
import RowGroup from '../../components/RowGroup';

export default function CurrentGroups() {
   const [currentTabs, setCurrentTabs] = useState<TabGroup>({});

   useEffect(() => {
      const getTabs = async () => {
         const allTabs = await getAllTabs();
         const tabGroups = reduceTabs(allTabs);
         setCurrentTabs(tabGroups);
      };
      getTabs();
   }, []);

   const sessions = getLastSession();

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
