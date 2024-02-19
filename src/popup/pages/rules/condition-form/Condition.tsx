import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import React, { memo } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
   ConditionValues,
   RuleType,
   matchRule,
   urlRule,
} from '../../../../types';
import HookFormInput from '../../../components/HookFormInput';
import HookFormSelect from '../../../components/HookFormSelect';
import Row from '../../../components/row/Row';

interface Props {
   handleAddCondition: () => void;
}

const formSchema = yup.object().shape({
   query: yup.string().required('Please enter a query'),
   match: yup
      .mixed<matchRule>()
      .oneOf(['contains', 'is equal to', 'ends with', 'starts with']),
   url: yup.mixed<urlRule>().oneOf(['any', 'hostname', 'path', 'query']),
});

const urlItems = [
   { value: 'Hostname', label: 'hostname' },
   { value: 'Path', label: 'path' },
   { value: 'Query', label: 'query' },
   { value: 'Any', label: 'any' },
];

const matchItems = [
   { value: 'is equal to', label: 'is equal to' },
   { value: 'ends with', label: 'ends with' },
   { value: 'starts with', label: 'starts with' },
   { value: 'contains', label: 'contains' },
];

/**
 * TODO
 */
const Condition = memo(function Condition({ handleAddCondition }: Props) {
   const formOptions = {
      resolver: yupResolver(formSchema) as Resolver<ConditionValues | RuleType>,
      defaultValues: {
         query: '',
         match: matchItems[0].value,
         url: urlItems[0].value,
      },
   };

   const { handleSubmit, control, reset } = useForm<ConditionValues | RuleType>(
      formOptions
   );

   /**
    * Triggered when submitting modal
    * @param data Object containing new condition data
    */
   const onSubmit = (data: ConditionValues | RuleType) => {
      if ('match' in data) {
         //  handleAddCondition(data);
         reset();
      }
   };

   return (
      <Row
         PrefixIcon={
            <>
               <Typography
                  variant='body1'
                  sx={{ alignSelf: 'center', marginRight: '1em' }}
               >
                  URL&nbsp;
               </Typography>
               <HookFormSelect
                  name='url'
                  control={control}
                  menuItems={urlItems}
                  label='URL Section'
               />
            </>
         }
         MiddleIcon={
            <HookFormSelect
               name='match'
               control={control}
               menuItems={matchItems}
               label='Match type'
            />
         }
         AffixIcon={
            <HookFormInput label='Match' control={control} name='query' />
         }
      />
   );
});

export default Condition;
