import React, { useEffect, useState } from 'react';
import { TabGroup } from '../../../types';
import { getLastSession } from '../../../utils/sessionUtils';
import { getTabsByGroup } from '../../../utils/tabGroupUtil';
import RowGroup from '../../components/RowGroup';

export default function CurrentGroups() {
   const [currentTabs, setCurrentTabs] = useState<TabGroup>({});

   useEffect(() => {
      const getTabs = async () => {
         const tabGroups = await getTabsByGroup();
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
