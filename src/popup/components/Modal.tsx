import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
} from '@mui/material';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import Input from './Input';

interface Props {
   title?: string;
   body?: string;
   cancel?: boolean;
   buttonText?: string;
   inputValue?: string;
   setInputValue?: Dispatch<SetStateAction<string>>;
   buttonAction?: (e: ChangeEvent<HTMLFormElement>) => void;
   handleClose: () => void;
   open: boolean;
}

export default function Modal({
   title,
   body,
   open,
   handleClose,
   buttonText,
   buttonAction,
   inputValue,
   setInputValue,
   cancel = true,
}: Props) {
   return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='xs'>
         {title !== undefined ? <DialogTitle>{title}</DialogTitle> : <></>}
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
               {cancel ? (
                  <Button
                     variant='contained'
                     color='error'
                     onClick={handleClose}
                  >
                     Cancel
                  </Button>
               ) : (
                  <></>
               )}
               {buttonAction !== undefined && buttonText !== undefined ? (
                  <Button variant='contained' type='submit'>
                     {buttonText}
                  </Button>
               ) : (
                  <></>
               )}
            </DialogActions>
         </form>
      </Dialog>
   );
}
