import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Switch, Tooltip } from '@mui/material';
import React from 'react';
import { SetAlertSettingsType, SubRule } from '../../../types';
import Rule from '../../../utils/Rule';
import Circle from '../../components/Circle';
import Row from '../../components/Row';
import RowGroup from '../../components/RowGroupParent';
import { usePopupStatus } from '../../provider/PopupStatusProvider';

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
   const isPopup = usePopupStatus();

   /**
    * Handles toggling active status of rule
    * @param event React HTML Input element event
    */
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
    * Deletes a subrule from current rule
    * @returns void
    */
   const handleDeleteSubRule = async (subRuleID: string) => {
      await rule.deleteSubRule(subRuleID);
      await updateRules();
   };

   /**
    * todo Handle edit rule
    */
   const handleEditRule = async () => {
      console.log('');
   };

   /**
    * todo Adds condition to current rule
    */
   const handleAddCondition = () => {
      console.log('');
   };

   return (
      <RowGroup
         id={rule.id}
         PrefixIcon={<Circle color={rule.groupColor || 'grey'} />}
         MiddleIcon={
            isPopup ? (
               <Switch checked={rule.active} onChange={handleChange} />
            ) : (
               <Tooltip title='Edit rule'>
                  <EditIcon />
               </Tooltip>
            )
         }
         FullScreenIcon={
            isPopup ? undefined : (
               <Switch checked={rule.active} onChange={handleChange} />
            )
         }
         enableFullScreenIconHover={false}
         enableMiddleIconHover={!isPopup}
         middleAction={isPopup ? () => {} : handleEditRule}
         AffixIcon={
            <Tooltip title='Delete this rule from storage'>
               <DeleteIcon fontSize='small' />
            </Tooltip>
         }
         affixAction={handleDeleteRule}
         title={rule.title}
         secondary={rule.formatActionText()}
      >
         {rule.subRules.map((subRule: SubRule) => (
            <Row
               key={subRule.query}
               id={subRule.id}
               isChild={true}
               title={Rule.formatSubRuleText(subRule)}
               AffixIcon={
                  <Tooltip title='Remove condition from rule'>
                     <CloseIcon fontSize='small' />
                  </Tooltip>
               }
               affixAction={() => handleDeleteSubRule(subRule.id)}
            />
         ))}
         <Row
            PrefixIcon={<AddIcon />}
            title='Add Condition'
            handleClick={handleAddCondition}
         />
      </RowGroup>
   );
}
