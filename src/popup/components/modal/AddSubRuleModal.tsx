import { yupResolver } from '@hookform/resolvers/yup';
import {
   Button,
   DialogActions,
   DialogContent,
   DialogContentText,
} from '@mui/material';
import React from 'react';
import { Resolver, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { RuleType, SubRuleValues, matchRule, urlRule } from '../../../types';
import HookFormInput from '../../components/HookFormInput';
import ModalContainer from './ModalContainer';

interface Props {
   open: boolean;
   title?: string;
   body?: string;
   handleClose: () => void;
   handleAddSubRule: (defaultValues: SubRuleValues) => void;
}
const formSchema = yup.object().shape({
   query: yup.string().required('Please enter a query'),
   match: yup
      .mixed<matchRule>()
      .oneOf(['contains', 'is equal to', 'ends with', 'starts with']),
   url: yup.mixed<urlRule>().oneOf(['any', 'hostname', 'path', 'query']),
});

export default function AddSubRuleModal({
   open,
   title,
   body,
   handleClose,
   handleAddSubRule,
}: Props) {
   const formOptions = {
      resolver: yupResolver(formSchema) as Resolver<SubRuleValues | RuleType>,
   };
   const { handleSubmit, control } = useForm<SubRuleValues | RuleType>(
      formOptions
   );

   const onSubmit = (data: SubRuleValues | RuleType) => {
      if ('match' in data) {
         handleAddSubRule(data);
      }
   };

   return (
      <ModalContainer open={open} handleClose={handleClose} title={title}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
               {body !== undefined ? (
                  <DialogContentText>{body}</DialogContentText>
               ) : (
                  <></>
               )}

               <HookFormInput
                  label='Enter Rule Title'
                  control={control}
                  name='query'
               />
               {/* <HookFormSelect
                  name='action'
                  control={control}
                  // menuItems={menuItems}
                  label='Select Action'
               /> */}
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
