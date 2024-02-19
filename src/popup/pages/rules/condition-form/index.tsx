import { Button } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AllConditionGroupsType } from '../../../../types';
import Switch from '../../../components/Switch';
import ConditionGroups from './ConditionGroups';

interface Props {
   conditionGroups: AllConditionGroupsType;
   setConditionGroups: Dispatch<SetStateAction<AllConditionGroupsType>>;
}

export default function ConditionForm({
   conditionGroups,
   setConditionGroups,
}: Props) {
   const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAllRequired: string
   ) => {
      const isAllRequired = newAllRequired === 'AND' ? true : false;
      setConditionGroups((previousConditionGroups) => ({
         ...previousConditionGroups,
         all_required: isAllRequired,
      }));
   };

   const currentValue = conditionGroups.all_required ? 'AND' : 'OR';

   const handleAddGroup = () => {
      const newGroup = { all_required: true, conditions: [], id: uuidv4() };
      setConditionGroups((previousConditionGroups) => ({
         ...previousConditionGroups,
         groups: [...previousConditionGroups.groups, newGroup],
      }));
   };

   return (
      <div>
         <h1>Conditions</h1>
         <Switch handleChange={handleChange} currentValue={currentValue} />
         <ConditionGroups
            groups={conditionGroups.groups}
            setConditionGroups={setConditionGroups}
            all_required={conditionGroups.all_required}
         />
         <Button onClick={handleAddGroup}>Add Group</Button>
      </div>
   );
}
