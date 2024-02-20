import { Box, Button, Paper } from '@mui/material';
import React, { memo } from 'react';
import {
   Control,
   Controller,
   UseFieldArrayUpdate,
   useFieldArray,
   useForm,
   useWatch,
} from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import {
   ConditionGroupType,
   ConditionType,
   ConditionValues,
   RuleType,
} from '../../../types';
import Switch from '../Switch';
import Condition from './Condition';
import GroupBuilder from './GroupBuilder';

interface Props {
   group: ConditionGroupType;
   control: Control<ConditionValues | RuleType, unknown>;
   // setConditionGroups: Dispatch<SetStateAction<AllConditionGroupsType>>;
   update: UseFieldArrayUpdate<
      ConditionValues | RuleType,
      'conditionGroups.groups'
   >;
   index: number;
   read_only?: boolean;
}

/**
 * TODO
 * like EDIT example
 */
const ConditionGroup = memo(function ConditionGroup({
   // group,
   // setConditionGroups,
   control,
   update,
   group,
   index,
   read_only = false,
}: Props) {
   // const [label, setLabel] = useState<string>(
   //    group.all_required ? 'AND' : 'OR'
   // );

   // like Edit but also has elements of Display
   const { register, handleSubmit } = useForm({
      defaultValues: group,
   });

   const { fields, append } = useFieldArray({
      control,
      name: `conditionGroups.groups.${index}.conditions`,
   });

   const conditions = group.conditions.map((currentCondition) => (
      <Condition condition={currentCondition} />
   ));

   const handleAddCondition = () => {
      // using id of group update Condition
      const newCondition: ConditionType = {
         url: 'hostname',
         match: 'is equal to',
         query: '',
         id: uuidv4(),
      };
      append(newCondition);
   };

   //    setConditionGroups((previousConditionGroups) => ({
   //       ...previousConditionGroups,
   //       groups: previousConditionGroups.groups.map((currentGroup) => {
   //          if (currentGroup.id != group.id) return currentGroup;
   //          return {
   //             ...currentGroup,
   //             conditions: [...currentGroup.conditions, newCondition],
   //          };
   //       }),
   //    }));
   // };

   // const handleSwitch = () => {
   //    setConditionGroups((previousConditionGroups) => ({
   //       ...previousConditionGroups,
   //       groups: previousConditionGroups.groups.map((currentGroup) => {
   //          if (currentGroup.id != group.id) return currentGroup;
   //          return {
   //             ...currentGroup,
   //             all_required: !group.all_required,
   //          };
   //       }),
   //    }));
   // };

   // useEffect(() => {
   //    const updatedLabel = group.all_required ? 'AND' : 'OR';
   //    setLabel(updatedLabel);
   // }, [group]);

   const label = useWatch({
      control,
      name: `conditionGroups.groups.${index}.all_required`,
   });

   return (
      <Paper sx={{ padding: '15px' }}>
         <GroupBuilder childrenArr={conditions} label={label ? 'AND' : 'OR'} />
         {/* MOVE THIS TO SEPARATE COMPONENT */}
         {!read_only ? (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               <Box>
                  <Button onClick={handleAddCondition}>
                     Add New Condition
                  </Button>
               </Box>
               <Box>
                  <Controller
                     name={`conditionGroups.groups.${index}.all_required`}
                     control={control}
                     render={({ field: { onChange, value } }) => (
                        // <input name={name} value={value} onChange={(e) => onChange(e)} />
                        <Switch
                           handleChange={(e, currentValue) =>
                              onChange(currentValue === 'AND' ? true : false)
                           }
                           currentValue={value ? 'AND' : 'OR'}
                        />
                     )}
                  />
                  {/* <Switch handleChange={handleSwitch} currentValue={label} /> */}
               </Box>
               <Box></Box>
            </Box>
         ) : (
            <></>
         )}
      </Paper>
   );
});

export default ConditionGroup;
