import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, Tooltip } from '@mui/material';
import React from 'react';
import { ColorEnum, LocalStorageTab } from '../../../types';
import { savedTabGroupsInstance } from '../../../utils/SavedTabGroups';
import TabUtil from '../../../utils/TabUtil';
import { getFaviconURL } from '../../../utils/getFaviconURL';
import Circle from '../../components/Circle';
import RowGroup from '../../components/RowGroupParent';
import Row from '../../components/row/Row';
import { useAlertProvider } from '../../provider/AlertProvider';
import { useModal } from '../../provider/ModalProvider';

interface Props {
   groupId: number;
   color: ColorEnum;
   title: string;
   tabs: LocalStorageTab[];
   getSavedGroups: () => Promise<void>;
}

export default function SavedGroup({
   groupId,
   color,
   title,
   tabs,
   getSavedGroups,
}: Props) {
   const { getOutput } = useModal();
   const { setAlertSettings } = useAlertProvider();

   /**
    * Deletes tab from a saved tab group and updates UI
    */
   const handleDelete = async () => {
      try {
         await savedTabGroupsInstance.delete(groupId, title);
         await getSavedGroups();
         setAlertSettings('success', 'Tab group has been deleted');
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   /**
    * Closes tab with given id from current window and updates UI
    * @param tabId id of the tab to close
    */
   const handleCloseTab = async (tabId: number) => {
      await savedTabGroupsInstance.removeTab(groupId, [tabId]);
      getSavedGroups();
   };

   /**
    * Opens the saved tab group and its tabs in current window
    */
   const handleClick = async () => {
      try {
         await savedTabGroupsInstance.open(groupId);
      } catch {
         setAlertSettings('error', 'Something went wrong');
      }
   };

   /**
    * Opens given URL in new tab
    * @param url full URL to open or undefined
    */
   const handleTabClick = async (url: string | undefined) => {
      if (url !== undefined) {
         await TabUtil.create({ url });
      } else {
         setAlertSettings('error', 'Something went wrong');
      }
   };

   /**
    * Opens popup window allowing user to select tabs, then adds those selected to current saved group
    */
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
         <RowGroup
            id={groupId}
            PrefixIcon={<Circle color={color} />}
            MiddleIcon={
               <Tooltip title='Add tab to group'>
                  <AddIcon />
               </Tooltip>
            }
            middleAction={handleAddTab}
            AffixIcon={
               <Tooltip title='Delete tab group'>
                  <DeleteIcon />
               </Tooltip>
            }
            affixAction={handleDelete}
            title={title}
            secondary={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
            handleClick={handleClick}
         >
            {tabs.map((tab) => (
               <Row
                  key={tab.id}
                  id={tab.id}
                  isChild={true}
                  handleClick={
                     handleTabClick !== undefined
                        ? () => handleTabClick(tab.url)
                        : undefined
                  }
                  PrefixIcon={
                     <Box
                        component='img'
                        sx={{ height: '35%', width: '35%' }}
                        alt={`Favicon for ${tab.title}`}
                        src={getFaviconURL(tab.url || '')}
                     />
                  }
                  title={tab.title || ''}
                  AffixIcon={
                     <Tooltip title='Close tab'>
                        <RemoveCircleIcon fontSize='small' />
                     </Tooltip>
                  }
                  affixAction={() => {
                     if (tab.id) {
                        handleCloseTab(tab.id);
                     }
                  }}
               />
            ))}
         </RowGroup>
      </>
   );
}
