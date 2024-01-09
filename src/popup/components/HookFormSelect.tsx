import { MenuItem, Select } from '@mui/material';
import * as React from 'react';
import { Control, useController } from 'react-hook-form';
import { RuleType, SubRuleValues } from '../../types';

type MenuItemType = {
   value: number | string;
   label: string;
};

interface Props {
   control: Control<SubRuleValues | RuleType, unknown>;
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
      <>
         <Select {...field} placeholder={name} label={label}>
            {menuItems.map((menuItem: MenuItemType) => (
               <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>
            ))}
         </Select>
      </>
   );
}
