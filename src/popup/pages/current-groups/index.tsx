import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CurrentTabGroups from '../../../utils/CurrentTabGroups';
import StyledContainer from '../../components/StyledContainer';
import Row from '../../components/row/Row';
import { useAlertProvider } from '../../provider/AlertProvider';
import { useModal } from '../../provider/ModalProvider';
import CurrentGroup from './CurrentGroup';

export default function CurrentGroups() {
   const [groups, setGroups] = useState<number[]>([]);
   // const [alertSettings, setAlertSettings] = useAlertSettings();
   const { setAlertSettings } = useAlertProvider();
   const { getOutput } = useModal();

   useEffect(() => {
      getGroups();
   }, []);

   /**
    * Gets all current groups
    */
   const getGroups = async () => {
      try {
         const tabGroups = await CurrentTabGroups.getGroups();
         setGroups(tabGroups);
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong');
      }
   };

   /**
    * Called by modal to create new group with given title
    */
   const handleCreateGroup = async () => {
      const output = await getOutput({ title: 'Group Name', type: 'input' });
      if (output) {
         await CurrentTabGroups.create(output);
         getGroups();
      }
   };

   return (
      <StyledContainer>
         {groups.map((groupId) => (
            <CurrentGroup
               key={groupId}
               groupId={groupId}
               getGroups={getGroups}
            />
         ))}
         <div>
            <Row
               id={uuidv4()}
               title='Create new group'
               PrefixIcon={<AddIcon />}
               handleClick={handleCreateGroup}
            />
         </div>
      </StyledContainer>
   );
}
