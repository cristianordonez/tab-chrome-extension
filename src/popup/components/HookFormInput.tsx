import { TextField } from '@mui/material';
import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { RuleType, SubRuleValues } from '../../types';

interface Props {
   control: Control<SubRuleValues | RuleType, unknown>;
   label: string;
   name:
      | 'match'
      | 'url'
      | 'query'
      | 'title'
      | 'groupName'
      | 'groupColor'
      | 'action';
   defaultValue?: string;
}

export default function HookFormInput({
   control,
   label,
   name,
   defaultValue,
}: Props) {
   const { field } = useController({
      name,
      control,
      rules: { required: true },
      defaultValue,
   });
   return (
      <>
         <TextField {...field} placeholder={name} label={label} />
      </>
   );
}
