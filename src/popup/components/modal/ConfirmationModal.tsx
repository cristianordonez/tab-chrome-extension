import {
   Button,
   DialogActions,
   DialogContent,
   DialogContentText,
} from '@mui/material';
import React from 'react';
import ModalContainer from './ModalContainer';

interface Props {
   body?: string;
   open: boolean;
   buttonAction: () => void;
   handleClose: () => void;
   title?: string;
}

export default function ConfirmationModal({
   body,
   buttonAction,
   open,
   title,
   handleClose,
}: Props) {
   return (
      <ModalContainer open={open} handleClose={handleClose} title={title}>
         <>
            <DialogContent>
               {body !== undefined ? (
                  <DialogContentText>{body}</DialogContentText>
               ) : (
                  <></>
               )}
            </DialogContent>
            <DialogActions>
               <Button variant='contained' color='error' onClick={handleClose}>
                  Cancel
               </Button>
               <Button
                  variant='contained'
                  color='success'
                  onClick={buttonAction}
               >
                  Delete
               </Button>
            </DialogActions>
         </>
      </ModalContainer>
   );
}
