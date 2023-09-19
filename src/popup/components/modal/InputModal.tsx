import {
   Button,
   DialogActions,
   DialogContent,
   DialogContentText,
} from '@mui/material';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Input from '../Input';
import ModalContainer from './ModalContainer';

interface Props {
   open: boolean;
   title?: string;
   body?: string;
   buttonAction: (e: ChangeEvent<HTMLFormElement>) => void;
   inputValue: string;
   setInputValue: Dispatch<SetStateAction<string>>;
   handleClose: () => void;
}

export default function InputModal({
   open,
   title,
   body,
   buttonAction,
   inputValue,
   setInputValue,
   handleClose,
}: Props) {
   return (
      <ModalContainer open={open} handleClose={handleClose} title={title}>
         <form onSubmit={buttonAction || undefined}>
            <DialogContent>
               {body !== undefined ? (
                  <DialogContentText>{body}</DialogContentText>
               ) : (
                  <></>
               )}
               <Input value={inputValue} setValue={setInputValue} />
            </DialogContent>
            <DialogActions>
               <Button variant='contained' color='error' onClick={handleClose}>
                  Cancel
               </Button>
               <Button variant='contained' type='submit'>
                  OK
               </Button>
            </DialogActions>
         </form>
      </ModalContainer>
   );
}
