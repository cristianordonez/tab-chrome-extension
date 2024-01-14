import { List, ListItemButton } from '@mui/material';
import React from 'react';
import { SubRule } from '../../../types';

interface Props {
   subRules: SubRule[];
   handleAddSubRule: () => void;
}
export default function SubRulesForm({ subRules, handleAddSubRule }: Props) {
   return (
      <div>
         <h1>Conditions</h1>
         <List>
            {subRules.map((subRule) => (
               <h1>{subRule.query}</h1>
            ))}
            <ListItemButton onClick={handleAddSubRule}>
               Add Condition
            </ListItemButton>
         </List>
      </div>
   );
}
