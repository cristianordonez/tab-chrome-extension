import DeleteIcon from '@mui/icons-material/Delete';
import { AlertColor, Tooltip } from '@mui/material';
import React from 'react';
import { ColorEnum, LocalStorageTab } from '../../../types';
import SavedTabGroups from '../../../utils/SavedTabGroups';
import Circle from '../../components/Circle';
import TabGroup from '../../components/TabGroup';

interface Props {
   groupId: number;
   color: ColorEnum;
   title: string;
   tabs: LocalStorageTab[];
   setAlertSettings: (
      alertSeverity?: AlertColor,
      alertMessage?: string
   ) => void;
   getSavedGroups: () => Promise<void>;
}

export default function SavedGroup({
   groupId,
   color,
   title,
   tabs,
   setAlertSettings,
   getSavedGroups,
}: Props) {
   // deletes tab from saved tab group
   const handleDelete = async () => {
      try {
         await SavedTabGroups.delete(groupId, title);
         await getSavedGroups();
         setAlertSettings('success', 'Tab group has been deleted');
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // deletes tab from current saved group
   const handleCloseTab = async (tabId: number) => {
      await SavedTabGroups.removeTab(groupId, [tabId]);
      getSavedGroups();
   };

   // opens saved tab group and all associated tabs in current window
   const handleParentClick = async () => {
      try {
         await SavedTabGroups.open(groupId);
      } catch {
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // handles opening tab url on click
   const handleTabClick = async (url: string | undefined) => {
      if (url !== undefined) {
         await chrome.tabs.create({ url, active: false });
      } else {
         setAlertSettings('error', 'Something went wrong');
      }
   };

   return (
      <>
         <TabGroup
            ParentPrefixIcon={<Circle color={color} />}
            ParentAffixIcon={
               <Tooltip title='Delete tab group'>
                  <DeleteIcon />
               </Tooltip>
            }
            parentAffixAction={handleDelete}
            title={title}
            secondary={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
            handleParentClick={handleParentClick}
            tabs={tabs}
            groupId={groupId}
            handleCloseTab={handleCloseTab}
            handleTabClick={handleTabClick}
         />
      </>
   );
}
