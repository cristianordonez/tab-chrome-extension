import React, { useEffect, useState } from 'react';
import { LocalStorageTabGroups } from '../../../types';
import { TabGroupUtil } from '../../../utils/tabGroupUtil';
import RowGroup from '../../components/RowGroup';

export default function SavedGroups() {
   const [savedTabs, setSavedTabs] = useState<LocalStorageTabGroups>({});

   useEffect(() => {
      const getSavedGroups = async () => {
         const groups = await TabGroupUtil.getSavedTabGroups();
         setSavedTabs(groups);
      };
      getSavedGroups();
   }, []);

   return (
      <div>
         {Object.keys(savedTabs).map((groupId) => (
            <RowGroup
               key={groupId}
               title={savedTabs[Number(groupId)].title}
               color={savedTabs[Number(groupId)].color}
               groupId={Number(groupId)}
               tabs={savedTabs[Number(groupId)].tabs}
            />
         ))}
      </div>
   );
}
