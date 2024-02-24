import { Box, Button, Paper, Typography } from '@mui/material';
import React, { memo } from 'react';
import {
   Control,
   Controller,
   useFieldArray,
   useFormState,
   useWatch,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { ConditionType, ConditionValues, RuleType } from '../../../types';
import Switch from '../Switch';
import Condition from './Condition';
import GroupBuilder from './GroupBuilder';

interface Props {
   control: Control<ConditionValues | RuleType, unknown>;
   index: number;
   read_only?: boolean;
}

/**
 * TODO
 * like EDIT example
 */
const ConditionGroup = memo(function ConditionGroup({
   control,
   index,
   read_only = false,
}: Props) {
   const { fields, append } = useFieldArray({
      control,
      name: `conditionGroups.groups.${index}.conditions`,
   });

   const { errors } = useFormState({ control });
   /**
    * Rendered array of conditions
    */
   const conditions = fields.map((currentCondition, i) => (
      <Condition
         key={currentCondition.id}
         control={control}
         groupIndex={index}
         conditionIndex={i}
      />
   ));

   /**
    * Adds condition to group array
    */
   const handleAddCondition = () => {
      const newCondition: ConditionType = {
         url: 'hostname',
         match: 'is equal to',
         query: '',
         id: uuidv4(),
      };
      append(newCondition);
   };

   const label = useWatch({
      control,
      name: `conditionGroups.groups.${index}.all_required`,
   });

   return (
      <Paper sx={{ padding: '15px' }}>
         {errors &&
         (errors as RuleType)?.conditionGroups?.groups[index].conditions &&
         !Array.isArray(
            (errors as RuleType)?.conditionGroups?.groups[index].conditions
         ) ? (
            <Typography variant='body2' color={'error'}>
               Please provide at least 1 condition for current group
            </Typography>
         ) : (
            <></>
         )}
         <GroupBuilder childrenArr={conditions} label={label ? 'AND' : 'OR'} />
         {!read_only ? (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               <Box>
                  <Button onClick={handleAddCondition}>
                     Add New Condition
                  </Button>
               </Box>
               <Box>
                  <Controller
                     name={`conditionGroups.groups.${index}.all_required`}
                     control={control}
                     render={({ field: { onChange, value } }) => (
                        <>
                           <Switch
                              handleChange={(e, currentValue) =>
                                 onChange(currentValue === 'AND' ? true : false)
                              }
                              currentValue={value ? 'AND' : 'OR'}
                           />
                        </>
                     )}
                  />
               </Box>
            </Box>
         ) : (
            <></>
         )}
      </Paper>
   );
});

export default ConditionGroup;
