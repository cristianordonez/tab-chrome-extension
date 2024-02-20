import { Button } from '@mui/material';
import React from 'react';
import { Control, Controller, useFieldArray, useWatch } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { ConditionValues, RuleType } from '../../../types';
import Switch from '../Switch';
import ConditionGroup from './ConditionGroup';
import GroupBuilder from './GroupBuilder';

interface Props {
   // conditionGroups: AllConditionGroupsType;
   // setConditionGroups: Dispatch<SetStateAction<AllConditionGroupsType>>;
   control: Control<ConditionValues | RuleType, unknown>;
}

export default function ConditionForm({
   // conditionGroups,
   // setConditionGroups,
   control,
}: Props) {
   // like App but useForm has no control

   // const handleChange = (
   //    event: React.MouseEvent<HTMLElement>,
   //    newAllRequired: string
   // ) => {
   //    const isAllRequired = newAllRequired === 'AND' ? true : false;
   // setConditionGroups((previousConditionGroups) => ({
   //    ...previousConditionGroups,
   //    all_required: isAllRequired,
   // }));
   // };

   // const currentValue = conditionGroups.all_required ? 'AND' : 'OR';

   const { fields, append, update } = useFieldArray({
      control,
      name: 'conditionGroups.groups', // unique name for your Field Array
   });

   const handleAddGroup = () => {
      const newGroup = { all_required: true, conditions: [], id: uuidv4() };
      append(newGroup);
      // setConditionGroups((previousConditionGroups) => ({
      //    ...previousConditionGroups,
      //    groups: [...previousConditionGroups.groups, newGroup],
      // }));
   };

   const renderedGroups = fields.map((field, index) => (
      <ConditionGroup
         key={field.id}
         update={update}
         index={index}
         group={field}
         control={control}
      />
   ));

   const label = useWatch({
      control,
      name: 'conditionGroups.all_required',
   });

   console.log('label: ', label);
   return (
      <div>
         <h1>Conditions</h1>
         <Controller
            name='conditionGroups.all_required'
            control={control}
            render={({ field: { onChange, value } }) => (
               // <input name={name} value={value} onChange={(e) => onChange(e)} />
               <Switch
                  handleChange={(e, currentValue) =>
                     onChange(currentValue === 'AND' ? true : false)
                  }
                  currentValue={value ? 'AND' : 'OR'}
               />
            )}
         />
         {/* <ConditionGroups
            control={control}
            groups={fields}
            // setConditionGroups={setConditionGroups}
            all_required={conditionGroups.all_required}
         /> */}
         <GroupBuilder
            childrenArr={renderedGroups}
            label={label ? 'AND' : 'OR'}
         />
         ;<Button onClick={handleAddGroup}>Add Group</Button>
      </div>
   );
}
