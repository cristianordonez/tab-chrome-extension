import { FormControl, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { ConditionValues, MenuItemType, RuleType } from '../../types';

interface Props {
   control: Control<ConditionValues | RuleType, unknown>;
   menuItems: MenuItemType[];
   label: string;
   name:
      | 'match'
      | 'url'
      | 'query'
      | 'title'
      | 'groupName'
      | 'groupColor'
      | 'action';
}

export default function HookFormSelect({
   control,
   menuItems,
   label,
   name,
}: Props) {
   const { field } = useController({
      name,
      control,
      rules: { required: true },
   });

   return (
      <FormControl sx={{ minWidth: 120 }}>
         <Select {...field} inputProps={{ 'aria-label': label }}>
            {menuItems.map((menuItem: MenuItemType) => (
               <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>
            ))}
         </Select>
      </FormControl>
   );
}
