import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CurrentTabGroups from '../../../utils/CurrentTabGroups';
import { savedTabGroupsInstance } from '../../../utils/SavedTabGroups';
import TabUtil from '../../../utils/TabUtil';
import { getFaviconURL } from '../../../utils/getFaviconURL';
import Circle from '../../components/Circle';
import Row from '../../components/Row';
import RowGroup from '../../components/RowGroupParent';
import { useAlertProvider } from '../../provider/AlertProvider';
import { useModal } from '../../provider/ModalProvider';

interface Props {
   groupId: number;
   getGroups: () => Promise<void>;
}

export default function CurrentGroup({ groupId, getGroups }: Props) {
   const { setAlertSettings } = useAlertProvider();
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
            <RowGroup
               id={groupId}
               PrefixIcon={
                  <Circle
                     color={groupInfo !== null ? groupInfo.color : 'grey'}
                  />
               }
               MiddleIcon={
                  <Tooltip title='Close tab group and all associated tabs'>
                     <CloseIcon fontSize='small' />
                  </Tooltip>
               }
               middleAction={handleCloseGroup}
               AffixIcon={
                  <Tooltip title='Save tab group and associated tabs'>
                     <SaveIcon />
                  </Tooltip>
               }
               affixAction={saveGroup}
               title={groupInfo.title || ''}
               secondary={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
            >
               {tabs.map((tab) => (
                  <Row
                     key={tab.id}
                     id={tab.id || uuidv4()}
                     isChild={true}
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
               <Row
                  id={groupId}
                  PrefixIcon={<AddIcon />}
                  title='Create new tab'
                  isChild={true}
                  handleClick={handleCreateTab}
               />
            </RowGroup>
         </>
      );
   }
}
