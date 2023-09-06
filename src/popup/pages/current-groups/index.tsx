import AddIcon from '@mui/icons-material/Add';
import { List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CurrentTabGroups from '../../../utils/CurrentTabGroups';
import CustomAlert from '../../components/CustomAlert';
import Row from '../../components/Row';
import { useModal } from '../../hooks/ModalProvider';
import useAlertSettings from '../../hooks/useAlertSettings';
import CurrentGroup from './CurrentGroup';

export default function CurrentGroups() {
   const [groups, setGroups] = useState<number[]>([]);
   const [alertSettings, setAlertSettings] = useAlertSettings();
   const { getOutput } = useModal();

   useEffect(() => {
      getGroups();
   }, []);

   // gets all current groups
   const getGroups = async () => {
      try {
         const tabGroups = await CurrentTabGroups.get();
         setGroups(tabGroups);
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   // called by Modal to create new group with given title
   const handleCreateGroup = async () => {
      const output = await getOutput({ title: 'Group Name' });
      if (output) {
         await CurrentTabGroups.create(output);
         getGroups();
      }
   };

   // handles closing alert component
   const handleAlert = () => {
      setAlertSettings();
   };

   return (
      <div>
         {groups.map((groupId) => (
            <CurrentGroup
               key={groupId}
               groupId={groupId}
               getGroups={getGroups}
               setAlertSettings={setAlertSettings}
            />
         ))}
         <List>
            <Row
               title='Create new group'
               PrefixIcon={<AddIcon />}
               handleClick={handleCreateGroup}
            />
         </List>
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
