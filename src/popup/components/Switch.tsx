import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React, { MouseEvent } from 'react';
import { MenuItemType } from '../../types';

interface Props {
   currentValue: string;
   handleChange: (event: MouseEvent<HTMLElement>, value: string) => void;
}

export default function Switch({ currentValue, handleChange }: Props) {
   const items: MenuItemType[] = [
      { value: 'AND', label: 'AND' },
      { value: 'OR', label: 'OR ' },
   ];

   return (
      <ToggleButtonGroup
         color='primary'
         value={currentValue}
         onChange={handleChange}
         exclusive
      >
         {items.map((item) => (
            <ToggleButton value={item.value}>{item.label}</ToggleButton>
         ))}
      </ToggleButtonGroup>
   );
}
