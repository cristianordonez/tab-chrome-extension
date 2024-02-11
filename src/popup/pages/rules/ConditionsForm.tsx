import { List, ListItemButton } from '@mui/material';
import React from 'react';
import { Condition } from '../../../types';

interface Props {
   conditions: Condition[];
   handleAddConditions: () => void;
}
export default function ConditionsForm({
   conditions,
   handleAddConditions,
}: Props) {
   return (
      <div>
         <h1>Conditions</h1>
         <List>
            {conditions.map((condition) => (
               <h1>{condition.query}</h1>
            ))}
            <ListItemButton onClick={handleAddConditions}>
               Add Condition
            </ListItemButton>
         </List>
      </div>
   );
}
