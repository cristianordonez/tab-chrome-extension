import {
   Button,
   Checkbox,
   DialogActions,
   DialogContent,
   DialogContentText,
   FormControlLabel,
   FormGroup,
   Typography,
} from '@mui/material';
import React, { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import { FormattedTabs } from '../../../types';
import ModalContainer from './ModalContainer';

interface Props {
   open: boolean;
   title?: string;
   body?: string;
   tabs: FormattedTabs;
   setTabs: Dispatch<SetStateAction<FormattedTabs>>;
   buttonAction: () => void;
   handleClose: () => void;
}

export default function AddTabsModal({
   open,
   title,
   buttonAction,
   body,
   tabs,
   setTabs,
   handleClose,
}: Props) {
   // handles marking tabs as checked on click
   const handleChange = (
      e: SyntheticEvent<Element, Event>,
      checked: boolean
   ) => {
      const currentId = Number((e.target as HTMLElement).id);
      const currentTab = tabs[currentId];
      currentTab.isChecked = checked;
      setTabs({ ...tabs, [`${currentId}`]: currentTab });
   };

   return (
      <ModalContainer open={open} handleClose={handleClose} title={title}>
         <>
            <DialogContent
               sx={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  padding: 2,
               }}
            >
               {body !== undefined ? (
                  <DialogContentText>{body}</DialogContentText>
               ) : (
                  <></>
               )}
               <FormGroup>
                  {Object.keys(tabs).map((id) => (
                     <FormControlLabel
                        control={<Checkbox size='small' id={`${id}`} />}
                        checked={tabs[Number(id)].isChecked}
                        onChange={handleChange}
                        label={
                           <Typography variant='subtitle2'>
                              {tabs[Number(id)].title}
                           </Typography>
                        }
                     />
                  ))}
               </FormGroup>
               <DialogActions>
                  <Button
                     variant='contained'
                     color='error'
                     onClick={handleClose}
                  >
                     Cancel
                  </Button>
                  <Button variant='contained' onClick={buttonAction}>
                     OK
                  </Button>
               </DialogActions>
            </DialogContent>
         </>
      </ModalContainer>
   );
}
