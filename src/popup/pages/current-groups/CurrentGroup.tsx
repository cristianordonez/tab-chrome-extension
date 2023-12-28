import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { AlertColor, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CurrentTabGroups from '../../../utils/CurrentTabGroups';
import { savedTabGroupsInstance } from '../../../utils/SavedTabGroups';
import TabUtil from '../../../utils/TabUtil';
import Circle from '../../components/Circle';
import TabGroup from '../../components/TabGroup';
import { useModal } from '../../provider/ModalProvider';

interface Props {
   groupId: number;
   getGroups: () => Promise<void>;
   setAlertSettings: (
      alertSeverity?: AlertColor,
      alertMessage?: string
   ) => void;
}

export default function CurrentGroup({
   groupId,
   getGroups,
   setAlertSettings,
}: Props) {
   const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);
   const [groupInfo, setGroupInfo] = useState<chrome.tabGroups.TabGroup | null>(
      null
   );
   const { getOutput } = useModal();

   // updates current group with new info
   const updateGroup = async () => {
      const info = await CurrentTabGroups.getInfo(groupId);
      const tabs = await CurrentTabGroups.getTabs(groupId);
      setGroupInfo(info);
      setTabs(tabs);
   };

   // closes tab and all associated tab groups
   const handleCloseGroup = async () => {
      await CurrentTabGroups.delete(groupId);
      getGroups();
   };

   useEffect(() => {
      updateGroup();
   }, [groupId]);

   // handles saving tab group and its tabs to storage
   const saveGroup = async () => {
      try {
         if (groupId == -1) {
            const output = await getOutput({
               title: 'Group Name',
               type: 'input',
            });
            if (output) {
               const tabIds = tabs.reduce((accumulator, currentValue) => {
                  if (currentValue.id) {
                     accumulator.push(currentValue.id);
                  }
                  return accumulator;
               }, [] as number[]);
               await CurrentTabGroups.create(output, tabIds);
               getGroups();
            }
         } else {
            await savedTabGroupsInstance.save(groupId, tabs);
            setAlertSettings('success', 'Tab group saved');
         }
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // adds new tab to current group
   const handleCreateTab = async () => {
      await CurrentTabGroups.addTabs(groupId);
      updateGroup();
   };

   // closes tab from current tab group
   const handleCloseTab = async (tabId: number) => {
      await TabUtil.close([tabId]);
      if (tabs.length <= 1) {
         getGroups();
      } else {
         updateGroup();
      }
   };

   if (groupInfo === null) {
      return <></>;
   } else {
      return (
         <>
            <TabGroup
               ParentPrefixIcon={
                  <Circle
                     color={groupInfo !== null ? groupInfo.color : 'grey'}
                  />
               }
               ParentMiddleIcon={
                  <Tooltip title='Close tab group and all associated tabs'>
                     <CloseIcon fontSize='small' />
                  </Tooltip>
               }
               parentMiddleAction={handleCloseGroup}
               ParentAffixIcon={
                  <Tooltip title='Save tab group and associated tabs'>
                     <SaveIcon />
                  </Tooltip>
               }
               parentAffixAction={saveGroup}
               title={groupInfo.title}
               secondary={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
               tabs={tabs}
               groupId={groupId}
               handleCloseTab={handleCloseTab}
               handleCreateTab={handleCreateTab}
            />
         </>
      );
   }
}
