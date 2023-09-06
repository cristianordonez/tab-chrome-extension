import DeleteIcon from '@mui/icons-material/Delete';
import { AlertColor, Tooltip } from '@mui/material';
import React, { MouseEvent } from 'react';
import { ColorEnum, LocalStorageTab } from '../../../types';
import CurrentTabGroups from '../../../utils/CurrentTabGroups';
import SavedTabGroups from '../../../utils/SavedTabGroups';
import Circle from '../../components/Circle';
import RowGroup from '../../components/RowGroup';

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
   const handleDelete = async (e: React.MouseEvent) => {
      e.stopPropagation();
      try {
         await SavedTabGroups.delete(groupId, title);
         await getSavedGroups();
         setAlertSettings('success', 'Tab group has been deleted');
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // opens new tab when clicking on create new tab row
   const handleCreateTab = async () => {
      await CurrentTabGroups.update(groupId);
   };

   // deletes tab from current saved group
   const handleCloseTab = async (
      e: MouseEvent<HTMLElement | SVGSVGElement>,
      tabId: number
   ) => {
      e.stopPropagation();
      await SavedTabGroups.removeTab(groupId, [tabId]);
      getSavedGroups();
   };

   return (
      <>
         <RowGroup
            ParentPrefixButton={<Circle color={color} />}
            ParentAffixButton={
               <Tooltip title='Delete tab group'>
                  <DeleteIcon onClick={handleDelete} />
               </Tooltip>
            }
            title={title}
            secondary={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
            handleParentClick={() => {}}
            tabs={tabs}
            groupId={groupId}
            handleCloseTab={handleCloseTab}
            handleCreateTab={handleCreateTab}
            hover
         />
      </>
   );
}
