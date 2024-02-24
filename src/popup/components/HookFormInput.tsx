import { TextField } from '@mui/material';
import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { ConditionValues, RuleType } from '../../types';

interface Props {
   control: Control<ConditionValues | RuleType, unknown>;
   label: string;
   name:
      | 'match'
      | 'url'
      | 'query'
      | 'title'
      | 'groupName'
      | 'groupColor'
      | 'action'
      | `conditionGroups.groups.${number}.conditions.${number}.query`;
   defaultValue?: string;
}

export default function HookFormInput({
   control,
   label,
   name,
   defaultValue,
}: Props) {
   const {
      field,
      fieldState: { error },
   } = useController({
      name,
      control,
      defaultValue,
   });
   return (
      <>
         <TextField
            error={error != undefined}
            {...field}
            placeholder={name}
            label={label}
            helperText={error?.message}
         />
      </>
   );
}
