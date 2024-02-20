import { FormControl, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { ConditionValues, MenuItemType, RuleType } from '../../types';

interface Props {
   control: Control<ConditionValues | RuleType, unknown>;
   menuItems: MenuItemType[];
   label: string;
   name:
      | 'query'
      | 'title'
      | 'id'
      | 'match'
      | 'action'
      | 'url'
      | 'groupName'
      | 'groupColor'
      | 'active'
      | 'conditionGroups'
      | 'conditionGroups.all_required'
      | 'conditionGroups.groups'
      | `conditionGroups.groups.${number}.conditions.${number}`
      | `conditionGroups.groups.${number}.conditions.${number}.url`
      | `conditionGroups.groups.${number}.conditions.${number}.match`;
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
