import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LocalStorageTabGroups } from '../../../types';
import TabGroupUtil, {
   tabGroupUtilInstance,
} from '../../../utils/tabGroupUtil';
import Circle from '../../components/Circle';
import CustomAlert from '../../components/CustomAlert';
import RowGroupTabs from '../../components/RowGroupTabs';
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

   const handleCloseTab = () => {};

   // opens new tab when clicking on create new tab row
   const handleCreateTab = async (groupId: number) => {
      await TabGroupUtil.updateCurrentTabGroup(groupId);
   };

   return (
      <div>
         {Object.keys(savedTabs).map((groupId) => (
            <RowGroupTabs
               key={groupId}
               secondary={`${savedTabs[Number(groupId)].tabs.length} tab${
                  savedTabs[Number(groupId)].tabs.length > 1 ? 's' : ''
               }`}
               title={savedTabs[Number(groupId)].title}
               handleCreateTab={handleCreateTab}
               ParentPrefixButton={
                  <Circle color={savedTabs[Number(groupId)].color || 'grey'} />
               }
               groupId={Number(groupId)}
               tabs={savedTabs[Number(groupId)].tabs}
               ParentAffixButton={
                  <Tooltip title='Delete tab group'>
                     <DeleteIcon
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
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
