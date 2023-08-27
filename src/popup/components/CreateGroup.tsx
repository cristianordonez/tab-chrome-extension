import AddIcon from '@mui/icons-material/Add';
import { List } from '@mui/material';
import React from 'react';
import Row from './Row';

export default function CreateGroup() {
   const handleCreate = () => {
      console.log('HERE IN HANDLE CREATE');
   };
   return (
      <List>
         <Row
            title='Create new group'
            PrefixIcon={<AddIcon />}
            handleClick={handleCreate}
         />
      </List>
   );
}
