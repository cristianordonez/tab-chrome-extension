import React, { useEffect, useMemo, useState } from 'react';
import { LocalStorageTabGroup, LocalStorageTabGroups } from '../../../types';
import SavedTabGroups from '../../../utils/SavedTabGroups';
import CustomAlert from '../../components/CustomAlert';
import useAlertSettings from '../../hooks/useAlertSettings';
import SavedGroup from './SavedGroup';

export default function SavedGroups() {
   const [savedGroups, setSavedGroups] = useState<LocalStorageTabGroups>({});
   const [alertSettings, setAlertSettings] = useAlertSettings();

   // retrieve all saved groups from local storage
   const getSavedGroups = async () => {
      const groups = await SavedTabGroups.get();
      setSavedGroups(groups);
   };

   useEffect(() => {
      try {
         getSavedGroups();
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   }, []);

   // toggles open/close alert message
   const handleAlert = () => {
      setAlertSettings();
   };

   // sorts groups based on createdAt
   const sortedGroups = useMemo(() => {
      const groups = Object.entries(savedGroups);
      const sorted = [...groups].sort(
         (
            a: [string, LocalStorageTabGroup],
            b: [string, LocalStorageTabGroup]
         ) => {
            return a[1].createdAt - b[1].createdAt;
         }
      );
      return sorted.reduce(
         (accumulator, currentValue) => {
            accumulator.push(Number(currentValue[0]));
            return accumulator;
         },
         [] as unknown as number[]
      );
   }, [savedGroups]);

   return (
      <div>
         {/* {Object.keys(savedGroups).map((groupId) => ( */}
         {sortedGroups.map((groupId) => (
            <SavedGroup
               // key={groupId}
               groupId={Number(groupId)}
               color={savedGroups[Number(groupId)].color}
               title={savedGroups[Number(groupId)].title}
               tabs={savedGroups[Number(groupId)].tabs}
               setAlertSettings={setAlertSettings}
               getSavedGroups={getSavedGroups}
            />
         ))}
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
