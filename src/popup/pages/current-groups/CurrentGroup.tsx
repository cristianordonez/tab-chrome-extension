import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { AlertColor, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CurrentTabGroups from '../../../utils/CurrentTabGroups';
import { savedTabGroupsInstance } from '../../../utils/SavedTabGroups';
import Circle from '../../components/Circle';
import RowGroup from '../../components/RowGroup';
import { useModal } from '../../hooks/ModalProvider';

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

   const getTabs = async () => {
      const tabs = await chrome.tabs.query({ groupId: groupId });
      setTabs(tabs);
   };

   const getGroupInfo = async () => {
      const info = await CurrentTabGroups.getInfo(groupId);
      setGroupInfo(info);
   };

   const updateGroup = async () => {
      await getGroupInfo();
      await getTabs();
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
   const saveGroup = async (e: React.MouseEvent) => {
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

   const handleCreateTab = async () => {
      await CurrentTabGroups.update(groupId);
      updateGroup();
   };

   // todo handles closing current tab
   const handleCloseTab = async () => {};

   if (groupInfo === null) {
      return <></>;
   } else {
      return (
         <>
            <RowGroup
               ParentPrefixButton={
                  <Circle
                     color={groupInfo !== null ? groupInfo.color : 'grey'}
                  />
               }
               ParentMiddleButton={
                  <Tooltip title='Close tab group and all associated tabs'>
                     <CloseIcon fontSize='small' onClick={handleCloseGroup} />
                  </Tooltip>
               }
               ParentAffixButton={
                  <Tooltip title='Save tab group and associated tabs'>
                     <SaveIcon onClick={saveGroup} />
                  </Tooltip>
               }
               title={groupInfo.title}
               secondary={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
               handleParentClick={() => {}}
               tabs={tabs}
               groupId={groupId}
               handleCloseTab={handleCloseTab}
               handleCreateTab={handleCreateTab}
            />
         </>
      );
   }
}
