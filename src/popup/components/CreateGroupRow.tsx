import AddIcon from '@mui/icons-material/Add';
import { List } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import TabGroupUtil from '../../utils/tabGroupUtil';
import Modal from './Modal';
import Row from './Row';

interface Props {
   save?: boolean;
}

// button used to show new group button
export default function CreateGroupRow({ save = false }: Props) {
   const [open, setOpen] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>('');

   const handleCreate = async () => {
      const groupId = await TabGroupUtil.createTabGroup(inputValue);
      return groupId;
   };

   const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      const groupId = await handleCreate();
      console.log('inputValue: ', inputValue);
      console.log('groupId: ', groupId);
      setOpen(!open);
      // first
   };

   const toggleModal = () => {
      setOpen(!open);
   };
   return (
      <>
         <List>
            <Row
               title='Create new group'
               PrefixIcon={<AddIcon />}
               handleClick={toggleModal}
            />
         </List>
         <Modal
            open={open}
            handleClose={toggleModal}
            title='Group Name'
            inputValue={inputValue}
            setInputValue={setInputValue}
            buttonAction={handleSubmit}
            buttonText='Save'
         />
      </>
   );
}
