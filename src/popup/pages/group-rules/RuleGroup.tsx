import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Switch, Tooltip } from '@mui/material';
import React from 'react';
import { SetAlertSettingsType, SubRule } from '../../../types';
import Rule from '../../../utils/Rule';
import Circle from '../../components/Circle';
import Row from '../../components/Row';
import RowGroupParent from '../../components/RowGroupParent';

interface Props {
   rule: Rule;
   updateRules: () => Promise<void>;
   setAlertSettings: SetAlertSettingsType;
}

export default function RuleGroup({
   rule,
   updateRules,
   setAlertSettings,
}: Props) {
   const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      await rule.update({ active: event.target.checked });
      await updateRules();
   };

   /**
    * Deletes rule from storage and triggers rerender
    * @returns void
    */
   const handleDeleteRule = async () => {
      try {
         await rule.delete();
         await updateRules();
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong.');
      }
   };

   /**
    * todo Deletes a subrule from current rule
   // todo add a unique id to each subrule
    * @returns void
    */
   const handleDeleteSubRule = () => {
      return;
   };

   return (
      <RowGroupParent
         id={rule.id}
         ParentPrefixIcon={<Circle color={rule.groupColor || 'grey'} />}
         ParentMiddleIcon={
            <Switch checked={rule.active} onChange={handleChange} />
         }
         enableMiddleIconHover={false}
         ParentAffixIcon={
            <Tooltip title='Delete this rule from storage'>
               <DeleteIcon fontSize='small' />
            </Tooltip>
         }
         parentAffixAction={handleDeleteRule}
         title={rule.title}
         secondary={rule.formatActionText()}
      >
         {rule.subRules.map((subRule: SubRule, index) => (
            <Row
               key={subRule.query}
               id={index}
               isChild={true}
               title={Rule.formatSubRuleText(subRule)}
               AffixIcon={
                  <Tooltip title='Remove condition from rule'>
                     <CloseIcon fontSize='small' />
                  </Tooltip>
               }
               affixAction={handleDeleteSubRule}
            />
         ))}
      </RowGroupParent>
   );
}
