import SaveIcon from '@mui/icons-material/Save';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CurrentTabs } from '../../../types';
import { TabGroupUtil } from '../../../utils/tabGroupUtil';
import RowGroup from '../../components/RowGroup';

export default function CurrentGroups() {
   const [currentTabs, setCurrentTabs] = useState<CurrentTabs>({});

   useEffect(() => {
      const getTabs = async () => {
         const tabGroups = await TabGroupUtil.getCurrentTabGroups();
         console.log('tabGroups: ', tabGroups);
         setCurrentTabs(tabGroups);
      };
      getTabs();
   }, []);

   return (
      <div>
         {Object.keys(currentTabs).map((groupId) => (
            <RowGroup
               key={groupId}
               color={currentTabs[Number(groupId)].color}
               title={currentTabs[Number(groupId)].title}
               groupId={Number(groupId)}
               tabs={currentTabs[Number(groupId)].tabs}
               MainRowBtn={
                  <Tooltip title='Save tab group and associated tabs'>
                     <SaveIcon fontSize='small' onClick={() => {}} />
                  </Tooltip>
               }
            />
         ))}
      </div>
   );
}
