import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LocalStorageTabGroups } from '../../../types';
import TabGroupUtil, {
   tabGroupUtilInstance,
} from '../../../utils/tabGroupUtil';
import CustomAlert from '../../components/CustomAlert';
import RowGroup from '../../components/RowGroup';
import useAlertSettings from '../../hooks/useAlertSettings';

export default function SavedGroups() {
   const [savedTabs, setSavedTabs] = useState<LocalStorageTabGroups>({});
   const [alertSettings, setAlertSettings] = useAlertSettings();

   const getSavedGroups = async () => {
      const groups = await TabGroupUtil.getSavedTabGroups();
      setSavedTabs(groups);
   };

   useEffect(() => {
      try {
         getSavedGroups();
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   }, []);

   const handleDelete = async (groupId: number, title: string) => {
      try {
         await tabGroupUtilInstance.deleteTabGroup(groupId, title);
         await getSavedGroups();
         setAlertSettings('success', 'Tab group has been deleted');
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   const handleAlert = () => {
      setAlertSettings();
   };

   return (
      <div>
         {Object.keys(savedTabs).map((groupId) => (
            <RowGroup
               key={groupId}
               title={savedTabs[Number(groupId)].title}
               color={savedTabs[Number(groupId)].color}
               groupId={Number(groupId)}
               tabs={savedTabs[Number(groupId)].tabs}
               MainRowBtn={
                  <Tooltip title='Delete tab group'>
                     <DeleteIcon
                        fontSize='small'
                        onClick={() =>
                           handleDelete(
                              Number(groupId),
                              savedTabs[Number(groupId)].title
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
