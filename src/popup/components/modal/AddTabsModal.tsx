import {
   Button,
   Checkbox,
   DialogActions,
   DialogContent,
   DialogContentText,
   FormControlLabel,
   FormGroup,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import TabUtil from '../../../utils/TabUtil';
import ModalContainer from './ModalContainer';

interface Props {
   open: boolean;
   title?: string;
   body?: string;
   buttonAction: (e: ChangeEvent<HTMLFormElement>) => void;
   handleClose: () => void;
}

export default function AddTabsModal({
   open,
   title,
   buttonAction,
   body,
   handleClose,
}: Props) {
   const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);

   const findTabs = async () => {
      const tabs = await TabUtil.getAll();
      setTabs(tabs);
   };

   useEffect(() => {
      console.log('');
      findTabs();
   }, []);
   console.log('tabs: ', tabs);
   return (
      <ModalContainer open={open} handleClose={handleClose} title={title}>
         <form onSubmit={buttonAction || undefined}>
            <DialogContent>
               {body !== undefined ? (
                  <DialogContentText>{body}</DialogContentText>
               ) : (
                  <></>
               )}

               <FormGroup>
                  {tabs.map((tab) => (
                     <FormControlLabel control={<Checkbox />} label={tab.url} />
                  ))}
               </FormGroup>
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
