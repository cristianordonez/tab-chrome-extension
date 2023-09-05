import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LocalStorageTabGroups } from '../../../types';
import TabGroupUtil, {
   tabGroupUtilInstance,
} from '../../../utils/tabGroupUtil';
// import CreateGroupRow from '../../components/CreateGroupRow';
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

   const handleDelete = async (
      e: React.MouseEvent,
      groupId: number,
      title: string
   ) => {
      e.stopPropagation();
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

   const handleCreate = async (title: string) => {
      await TabGroupUtil.createTabGroup(title);
   };

   return (
      <div>
         {Object.keys(savedTabs).map((groupId) => (
            <RowGroup
               key={groupId}
               secondary={`${savedTabs[Number(groupId)].tabs.length} tab${
                  savedTabs[Number(groupId)].tabs.length > 1 ? 's' : ''
               }`}
               title={savedTabs[Number(groupId)].title}
               color={savedTabs[Number(groupId)].color}
               groupId={Number(groupId)}
               tabs={savedTabs[Number(groupId)].tabs}
               MainRowBtn={
                  <Tooltip title='Delete tab group'>
                     <DeleteIcon
                        // fontSize='large'
                        onClick={(e) =>
                           handleDelete(
                              e,
                              Number(groupId),
                              savedTabs[Number(groupId)].title
                           )
                        }
                     />
                  </Tooltip>
               }
            />
         ))}
         {/* <CreateGroupRow handleCreate={handleCreate} /> */}
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
