import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SaveIcon from '@mui/icons-material/Save';
import { List, Tooltip } from '@mui/material';
import React, { MouseEvent, useEffect, useState } from 'react';
import { CurrentTabs } from '../../../types';
import TabGroupUtil, {
   tabGroupUtilInstance,
} from '../../../utils/tabGroupUtil';
import Circle from '../../components/Circle';
import CustomAlert from '../../components/CustomAlert';
import Row from '../../components/Row';
import RowGroupTabs from '../../components/RowGroupTabs';
import { useModal } from '../../hooks/ModalProvider';
import useAlertSettings from '../../hooks/useAlertSettings';

export default function CurrentGroups() {
   const [currentTabs, setCurrentTabs] = useState<CurrentTabs>({});
   const [alertSettings, setAlertSettings] = useAlertSettings();
   const { getOutput } = useModal();

   useEffect(() => {
      getTabs();
   }, []);

   // gets and updates all current tab groups
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
               const tabIds = tabs.reduce((accumulator, currentValue) => {
                  if (currentValue.id) {
                     accumulator.push(currentValue.id);
                  }
                  return accumulator;
               }, [] as number[]);
               await TabGroupUtil.createTabGroup(output, tabIds);
               getTabs();
            }
         } else {
            await tabGroupUtilInstance.updateOrSaveNewGroup(groupId, tabs);
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
   const handleCreateGroup = async () => {
      const output = await getOutput({ title: 'Group Name' });
      if (output) {
         await TabGroupUtil.createTabGroup(output);
         getTabs();
      }
   };

   // opens new tab when clicking on create new tab row
   const handleCreateTab = async (groupId: number) => {
      await TabGroupUtil.updateCurrentTabGroup(groupId);
      getTabs();
   };

   // closes tab and all associated tab groups
   const handleCloseGroup = async (
      e: MouseEvent<HTMLElement | SVGSVGElement>,
      groupId: number
   ) => {
      await TabGroupUtil.closeTabGroup(groupId);
      getTabs();
   };

   // handles closing current tab
   const handleCloseTab = async () => {};

   return (
      <div>
         {Object.keys(currentTabs).map((groupId) => (
            <RowGroupTabs
               key={groupId}
               secondary={`${currentTabs[Number(groupId)].tabs.length} tab${
                  currentTabs[Number(groupId)].tabs.length > 1 ? 's' : ''
               }`}
               title={currentTabs[Number(groupId)].title}
               groupId={Number(groupId)}
               tabs={currentTabs[Number(groupId)].tabs}
               handleCreateTab={handleCreateTab}
               ParentPrefixButton={
                  <Circle
                     color={currentTabs[Number(groupId)].color || 'grey'}
                  />
               }
               ParentAffixButton={
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
               ParentMiddleButton={
                  <Tooltip title='Close tab group and all associated tabs'>
                     <CloseIcon
                        fontSize='small'
                        onClick={(e) => handleCloseGroup(e, Number(groupId))}
                     />
                  </Tooltip>
               }
               ChildAffixButton={
                  <Tooltip title='Close tab'>
                     <RemoveCircleIcon
                        fontSize='small'
                        onClick={handleCloseTab}
                     />
                  </Tooltip>
               }
            />
         ))}
         <List>
            <Row
               title='Create new group'
               PrefixIcon={<AddIcon />}
               handleClick={handleCreateGroup}
            />
         </List>
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
