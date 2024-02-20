import { Typography } from '@mui/material';
import React, { memo } from 'react';
import { Control } from 'react-hook-form';
import { ConditionValues, RuleType } from '../../../types';
import HookFormInput from '../HookFormInput';
import HookFormSelect from '../HookFormSelect';
import Row from '../row/Row';

interface Props {
   control: Control<ConditionValues | RuleType, unknown>;
   groupIndex: number;
   conditionIndex: number;
}

const urlItems = [
   { value: 'hostname', label: 'Hostname' },
   { value: 'path', label: 'Path' },
   { value: 'query', label: 'Query' },
   { value: 'any', label: 'Any' },
];

const matchItems = [
   { value: 'is equal to', label: 'is equal to' },
   { value: 'ends with', label: 'ends with' },
   { value: 'starts with', label: 'starts with' },
   { value: 'contains', label: 'contains' },
];

/**
 * Single condition row
 */
const Condition = memo(function Condition({
   control,
   groupIndex,
   conditionIndex,
}: Props) {
   return (
      <Row
         PrefixIcon={
            <>
               <Typography
                  variant='body1'
                  sx={{ alignSelf: 'center', marginRight: '1em' }}
               >
                  URL&nbsp;
               </Typography>
               <HookFormSelect
                  name={`conditionGroups.groups.${groupIndex}.conditions.${conditionIndex}.url`}
                  control={control}
                  menuItems={urlItems}
                  label='URL Section'
               />
            </>
         }
         MiddleIcon={
            <HookFormSelect
               name={`conditionGroups.groups.${groupIndex}.conditions.${conditionIndex}.match`}
               control={control}
               menuItems={matchItems}
               label='Match type'
            />
         }
         AffixIcon={
            <HookFormInput
               label='Match'
               control={control}
               name={`conditionGroups.groups.${groupIndex}.conditions.${conditionIndex}.query`}
            />
         }
      />
   );
});

export default Condition;
