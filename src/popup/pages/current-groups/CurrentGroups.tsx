import SaveIcon from '@mui/icons-material/Save';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CurrentTabs } from '../../../types';
import TabGroupUtil, {
   tabGroupUtilInstance,
} from '../../../utils/tabGroupUtil';
import CreateGroup from '../../components/CreateGroup';
import CustomAlert from '../../components/CustomAlert';
import RowGroup from '../../components/RowGroup';
import useAlertSettings from '../../hooks/useAlertSettings';

export default function CurrentGroups() {
   const [currentTabs, setCurrentTabs] = useState<CurrentTabs>({});
   const [alertSettings, setAlertSettings] = useAlertSettings();

   useEffect(() => {
      const getTabs = async () => {
         try {
            const tabGroups = await TabGroupUtil.getCurrentTabGroups();
            setCurrentTabs(tabGroups);
         } catch (err) {
            console.error(err);
            setAlertSettings('error', 'Something went wrong');
         }
      };
      getTabs();
   }, []);

   // handles saving tab group and its tabs to storage
   const saveGroup = async (
      e: React.MouseEvent,
      groupId: number,
      tabs: chrome.tabs.Tab[]
   ) => {
      e.stopPropagation();
      try {
         await tabGroupUtilInstance.updateOrCreateGroup(groupId, tabs);
         setAlertSettings('success', 'Tab group saved');
      } catch (err) {
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // handles closing alert component
   const handleAlert = () => {
      setAlertSettings();
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
                        fontSize='small'
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
         <CreateGroup />
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
