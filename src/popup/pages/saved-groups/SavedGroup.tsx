import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { AlertColor, Tooltip } from '@mui/material';
import React from 'react';
import { ColorEnum, LocalStorageTab } from '../../../types';
import SavedTabGroups, {
   savedTabGroupsInstance,
} from '../../../utils/SavedTabGroups';
import TabUtil from '../../../utils/TabUtil';
import Circle from '../../components/Circle';
import TabGroup from '../../components/TabGroup';
import { useModal } from '../../provider/ModalProvider';

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
   // hook used to open modal
   const { getOutput } = useModal();

   // deleted tab from saved tab group
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
         await TabUtil.create({ url });
      } else {
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // handles adding tab to current group
   const handleAddTab = async () => {
      const output = await getOutput({ title: 'Add tabs', type: 'tabs' });
      if (output) {
         const tabsToSave = JSON.parse(output) as chrome.tabs.Tab[];
         try {
            await savedTabGroupsInstance.addTabs(groupId, tabsToSave);
            await getSavedGroups();
         } catch (err) {
            console.error(err);
            setAlertSettings('error', 'Something went wrong');
         }
      }
   };

   return (
      <>
         <TabGroup
            ParentPrefixIcon={<Circle color={color} />}
            ParentMiddleIcon={
               <Tooltip title='Add tab to group'>
                  <AddIcon />
               </Tooltip>
            }
            ParentAffixIcon={
               <Tooltip title='Delete tab group'>
                  <DeleteIcon />
               </Tooltip>
            }
            parentAffixAction={handleDelete}
            parentMiddleAction={handleAddTab}
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
