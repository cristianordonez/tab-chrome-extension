import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import { List, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CurrentTabs } from '../../../types';
import TabGroupUtil, {
   tabGroupUtilInstance,
} from '../../../utils/tabGroupUtil';
// import CreateGroupRow from '../../components/CreateGroupRow';
import CustomAlert from '../../components/CustomAlert';
import Row from '../../components/Row';
import RowGroup from '../../components/RowGroup';
import { useModal } from '../../hooks/ModalProvider';
import useAlertSettings from '../../hooks/useAlertSettings';

export default function CurrentGroups() {
   const [currentTabs, setCurrentTabs] = useState<CurrentTabs>({});
   const [alertSettings, setAlertSettings] = useAlertSettings();
   const { getOutput } = useModal();

   useEffect(() => {
      getTabs();
   }, []);

   const getTabs = async () => {
      try {
         const tabGroups = await TabGroupUtil.getCurrentTabGroups();
         setCurrentTabs(tabGroups);
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // handles saving tab group and its tabs to storage
   const saveGroup = async (
      e: React.MouseEvent,
      groupId: number,
      tabs: chrome.tabs.Tab[]
   ) => {
      e.stopPropagation();
      try {
         if (groupId == -1) {
            const output = await getOutput({ title: 'Group Name' });
            if (output) {
               console.log('output: ', output);
               // todo save tab group with given title to storage
               // todo save tabs connected to tab group to local storage
               // todo rerender UI
            }
         } else {
            await tabGroupUtilInstance.updateOrCreateGroup(groupId, tabs);
            setAlertSettings('success', 'Tab group saved');
         }
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // handles closing alert component
   const handleAlert = () => {
      setAlertSettings();
   };

   // called by Modal to create new group with given title
   const handleCreate = async () => {
      const output = await getOutput({ title: 'Group Name' });
      if (output) {
         await TabGroupUtil.createTabGroup(output);
         getTabs();
      }
   };

   return (
      <div>
         {Object.keys(currentTabs).map((groupId) => (
            <RowGroup
               key={groupId}
               color={currentTabs[Number(groupId)].color}
               secondary={`${currentTabs[Number(groupId)].tabs.length} tab${
                  currentTabs[Number(groupId)].tabs.length > 1 ? 's' : ''
               }`}
               title={currentTabs[Number(groupId)].title}
               groupId={Number(groupId)}
               tabs={currentTabs[Number(groupId)].tabs}
               MainRowBtn={
                  <Tooltip title='Save tab group and associated tabs'>
                     <SaveIcon
                        onClick={(e) =>
                           saveGroup(
                              e,
                              Number(groupId),
                              currentTabs[Number(groupId)].tabs
                           )
                        }
                     />
                  </Tooltip>
               }
            />
         ))}
         {/* <CreateGroupRow handleCreate={handleCreate} /> */}
         <List>
            <Row
               title='Create new group'
               PrefixIcon={<AddIcon />}
               handleClick={handleCreate}
            />
         </List>
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
