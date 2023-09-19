import {
   Button,
   DialogActions,
   DialogContent,
   DialogContentText,
} from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import Input from '../Input';

interface Props {
   body?: string;
   buttonAction?: () => void;
   inputValue: string;
   setInputValue: Dispatch<SetStateAction<string>>;
   handleClose: () => void;
   buttonText?: string;
}

export default function ConfirmationModal({
   body,
   buttonAction,
   inputValue,
   setInputValue,
   handleClose,
   buttonText,
}: Props) {
   return (
      <form onSubmit={buttonAction || undefined}>
         <DialogContent>
            {body !== undefined ? (
               <DialogContentText>{body}</DialogContentText>
            ) : (
               <></>
            )}
            {inputValue !== undefined && setInputValue !== undefined ? (
               <Input value={inputValue} setValue={setInputValue} />
            ) : (
               <></>
            )}
         </DialogContent>
         <DialogActions>
            <Button variant='contained' color='error' onClick={handleClose}>
               Cancel
            </Button>
            {buttonAction !== undefined && buttonText !== undefined ? (
               <Button variant='contained' type='submit'>
                  {buttonText}
               </Button>
            ) : (
               <></>
            )}
         </DialogActions>
      </form>
   );
}
