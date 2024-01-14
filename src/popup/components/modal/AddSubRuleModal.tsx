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
import HookFormSelect from '../HookFormSelect';
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

   /**
    * Triggered when submitting modal
    * @param data Object containing new subrule data
    */
   const onSubmit = (data: SubRuleValues | RuleType) => {
      console.log('data in on submit: ', data);
      if ('match' in data) {
         handleAddSubRule(data);
      }
   };

   const urlItems = [
      { value: 'any', label: 'any' },
      { value: 'hostname', label: 'hostname' },
      { value: 'path', label: 'path' },
      { value: 'query', label: 'query' },
   ];

   const matchItems = [
      { value: 'contains', label: 'contains' },
      { value: 'is equal to', label: 'is equal to' },
      { value: 'ends with', label: 'ends with' },
      { value: 'starts with', label: 'starts with' },
   ];

   return (
      <ModalContainer open={open} handleClose={handleClose} title={title}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
               {body !== undefined ? (
                  <DialogContentText>{body}</DialogContentText>
               ) : (
                  <></>
               )}

               <HookFormSelect
                  name='url'
                  control={control}
                  menuItems={urlItems}
                  label='URL Section'
               />
               <HookFormSelect
                  name='match'
                  control={control}
                  menuItems={matchItems}
                  label='Match type'
               />
               <HookFormInput label='Query' control={control} name='query' />
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
