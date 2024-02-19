import { Box, Button } from '@mui/material';
import React, { Dispatch, SetStateAction, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
   AllConditionGroupsType,
   ConditionGroupType,
   ConditionType,
} from '../../../../types';
import Condition from './Condition';
import GroupBuilder from './GroupBuilder';

interface Props {
   group: ConditionGroupType;
   setConditionGroups: Dispatch<SetStateAction<AllConditionGroupsType>>;
   read_only?: boolean;
}

/**
 * TODO
 */
const ConditionGroup = memo(function ConditionGroup({
   group,
   setConditionGroups,
   read_only = false,
}: Props) {
   console.log('group: ', group);
   console.log('read_only: ', read_only);

   const conditions = group.conditions.map((currentCondition) => (
      <Condition handleAddCondition={() => {}} />
   ));

   const handleAddCondition = () => {
      //    using id of group update Condition
      const newCondition: ConditionType = {
         url: 'hostname',
         match: 'is equal to',
         query: '',
         id: uuidv4(),
      };
      //   const updatedGroup = {...group, conditions: [...group.conditions, newCondition]}

      setConditionGroups((previousConditionGroups) => ({
         ...previousConditionGroups,
         groups: previousConditionGroups.groups.map((currentGroup) => {
            if (currentGroup.id != group.id) return currentGroup;
            return {
               ...currentGroup,
               conditions: [...currentGroup.conditions, newCondition],
            };
         }),
      }));
   };

   return (
      <>
         <GroupBuilder
            childrenArr={conditions}
            label={group.all_required ? 'AND' : 'OR'}
         />
         {/* MOVE THIS TO SEPARATE COMPONENT */}
         {!read_only ? (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               <Box>
                  <Button onClick={handleAddCondition}>
                     Add New Condition
                  </Button>
               </Box>
               <Box></Box>
               <Box></Box>
            </Box>
         ) : (
            <></>
         )}
      </>
   );
});

export default ConditionGroup;
