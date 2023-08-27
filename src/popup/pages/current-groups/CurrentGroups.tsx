import SaveIcon from '@mui/icons-material/Save';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AlertSettings, CurrentTabs } from '../../../types';
import TabGroupUtil, {
   tabGroupUtilInstance,
} from '../../../utils/tabGroupUtil';
import CustomAlert from '../../components/CustomAlert';
import RowGroup from '../../components/RowGroup';

const defaultAlertSettings: AlertSettings = {
   isOpen: false,
   alertSeverity: 'success',
   alertMessage: '',
};

export default function CurrentGroups() {
   const [currentTabs, setCurrentTabs] = useState<CurrentTabs>({});
   const [alertSettings, setDefaultAlertSettings] =
      useState<AlertSettings>(defaultAlertSettings);

   useEffect(() => {
      const getTabs = async () => {
         try {
            const tabGroups = await TabGroupUtil.getCurrentTabGroups();
            setCurrentTabs(tabGroups);
         } catch (err) {
            console.error(err);
            const alert = { ...alertSettings };
            alert.alertMessage = 'Something went wrong';
            alert.alertSeverity = 'error';
            alert.isOpen = true;
         }
      };
      getTabs();
   }, []);

   // handles saving tab group and its tabs to storage
   const saveGroup = async (groupId: number, tabs: chrome.tabs.Tab[]) => {
      const alert = { ...alertSettings };
      try {
         await tabGroupUtilInstance.updateOrCreateGroup(groupId, tabs);
         alert.alertMessage = 'Tab group saved';
         alert.alertSeverity = 'success';
      } catch (err) {
         alert.alertMessage = 'Something went wrong';
         alert.alertSeverity = 'error';
      } finally {
         alert.isOpen = true;
         setDefaultAlertSettings(alert);
      }
   };

   // handles closing alert component
   const handleAlert = () => {
      const currentAlertSettings = { ...alertSettings };
      currentAlertSettings.isOpen = !alertSettings.isOpen;
      setDefaultAlertSettings(currentAlertSettings);
   };

   return (
      <div>
         {Object.keys(currentTabs).map((groupId) => (
            <RowGroup
               key={groupId}
               color={currentTabs[Number(groupId)].color}
               title={currentTabs[Number(groupId)].title}
               groupId={Number(groupId)}
               tabs={currentTabs[Number(groupId)].tabs}
               MainRowBtn={
                  <Tooltip title='Save tab group and associated tabs'>
                     <SaveIcon
                        fontSize='small'
                        onClick={() =>
                           saveGroup(
                              Number(groupId),
                              currentTabs[Number(groupId)].tabs
                           )
                        }
                     />
                  </Tooltip>
               }
            />
         ))}
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
