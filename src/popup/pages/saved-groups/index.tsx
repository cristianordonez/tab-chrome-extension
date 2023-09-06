import React, { useEffect, useState } from 'react';
import { LocalStorageTabGroups } from '../../../types';
import SavedTabGroups from '../../../utils/SavedTabGroups';
import CustomAlert from '../../components/CustomAlert';
import useAlertSettings from '../../hooks/useAlertSettings';
import SavedGroup from './SavedGroup';

export default function SavedGroups() {
   const [savedTabs, setSavedTabs] = useState<LocalStorageTabGroups>({});
   const [alertSettings, setAlertSettings] = useAlertSettings();

   const getSavedGroups = async () => {
      const groups = await SavedTabGroups.get();
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

   const handleAlert = () => {
      setAlertSettings();
   };

   return (
      <div>
         {Object.keys(savedTabs).map((groupId) => (
            <SavedGroup
               key={groupId}
               groupId={Number(groupId)}
               color={savedTabs[Number(groupId)].color}
               title={savedTabs[Number(groupId)].title}
               tabs={savedTabs[Number(groupId)].tabs}
               setAlertSettings={setAlertSettings}
               getSavedGroups={getSavedGroups}
            />
         ))}
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
