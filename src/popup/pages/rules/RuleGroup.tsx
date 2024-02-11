import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Switch, Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubRule } from '../../../types';
import Rule from '../../../utils/Rule';
import Circle from '../../components/Circle';
import Row from '../../components/Row';
import RowGroup from '../../components/RowGroupParent';
import { useAlertProvider } from '../../provider/AlertProvider';
import { useModal } from '../../provider/ModalProvider';
import { usePopupStatus } from '../../provider/PopupStatusProvider';

interface Props {
   rule: Rule;
   updateRules: () => Promise<void>;
}

export default function RuleGroup({ rule, updateRules }: Props) {
   const navigate = useNavigate();
   const isPopup = usePopupStatus();
   const { getOutput } = useModal();
   const { setAlertSettings } = useAlertProvider();

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
    * Handle edit rule. Navigates to /edit route with rule ID in state
    */
   const handleEditRule = async () => {
      navigate('edit', { state: { ruleId: rule.id } });
   };

   /**
    * Opens modal and adds condition to current rule and saves to local storage
    */
   const handleAddCondition = async () => {
      const output = await getOutput({
         title: 'Add Condition',
         type: 'subrule',
      });
      if (output) {
         await rule.addSubRule(JSON.parse(output));
         await updateRules();
      }
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
