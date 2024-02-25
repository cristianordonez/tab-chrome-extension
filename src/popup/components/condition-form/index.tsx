import { Button, Typography } from '@mui/material';
import React from 'react';
import {
   Control,
   Controller,
   useFieldArray,
   useFormState,
   useWatch,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { ConditionValues, RuleType } from '../../../types';
import Switch from '../Switch';
import ConditionGroup from './ConditionGroup';
import GroupBuilder from './GroupBuilder';

interface Props {
   control: Control<ConditionValues | RuleType, unknown>;
}

export default function ConditionForm({ control }: Props) {
   const { fields, append } = useFieldArray({
      control,
      name: 'conditionGroups.groups',
   });

   const { errors } = useFormState({ control });
   /**
    * Adds new default group to group array
    */
   const handleAddGroup = () => {
      const newGroup = { all_required: true, conditions: [], id: uuidv4() };
      append(newGroup);
   };

   const renderedGroups = fields.map((field, index) => (
      <ConditionGroup key={field.id} index={index} control={control} />
   ));

   const label = useWatch({
      control,
      name: 'conditionGroups.all_required',
   });

   return (
      <div>
         <h1>Conditions</h1>
         <Controller
            name='conditionGroups.all_required'
            control={control}
            render={({ field: { onChange, value } }) => (
               <Switch
                  handleChange={(e, currentValue) => {
                     onChange(currentValue === 'AND' ? true : false);
                  }}
                  currentValue={value ? 'AND' : 'OR'}
               />
            )}
         />
         <GroupBuilder
            childrenArr={renderedGroups}
            label={label ? 'AND' : 'OR'}
         />
         {errors &&
         (errors as RuleType)?.conditionGroups?.groups &&
         !Array.isArray((errors as RuleType)?.conditionGroups?.groups) ? (
            <Typography variant='body2' color={'error'}>
               At least 1 condition is required to create a rule
            </Typography>
         ) : (
            <></>
         )}
         <Button onClick={handleAddGroup}>Add Group</Button>
      </div>
   );
}
