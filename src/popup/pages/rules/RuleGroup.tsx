import { yupResolver } from '@hookform/resolvers/yup';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Switch, Tooltip } from '@mui/material';
import React from 'react';
import { Resolver, useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ConditionValues, RuleType } from '../../../types';
import Rule from '../../../utils/Rule';
import formSchema from '../../../utils/formSchema';
import Circle from '../../components/Circle';
import ConditionGroup from '../../components/ConditionGroup';
import GroupBuilder from '../../components/GroupBuilder';
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
   const { setAlertSettings } = useAlertProvider();
   const { getOutput } = useModal();

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
         const output = await getOutput({
            title: 'Delete rule?',
            type: 'confirmation',
            body: 'This will permanently delete this rule from your Chrome storage.',
         });
         if (output) {
            await rule.delete();
            await updateRules();
         }
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Something went wrong.');
      }
   };

   /**
    * Handle edit rule. Navigates to /edit route with rule ID in state
    */
   const handleEditRule = async () => {
      navigate('edit', { state: { ruleId: rule.id } });
   };

   /**
    * Create form for rendering ConditionGroup component
    */
   const { control } = useForm<RuleType | ConditionValues>({
      defaultValues: { conditionGroups: rule.conditionGroups },
      resolver: yupResolver(formSchema) as unknown as Resolver<
         ConditionValues | Partial<RuleType>
      >,
   });

   /**
    * Create field array from rule.conditionGroups.groups
    */
   const { fields } = useFieldArray({
      control,
      name: 'conditionGroups.groups',
   });

   /**
    * Render a component for each field in field array for use in GroupBuilder component
    */
   const renderedGroups = fields.map((field, index) => (
      <ConditionGroup
         key={field.id}
         index={index}
         control={control}
         read_only={true}
      />
   ));

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
         <GroupBuilder
            childrenArr={renderedGroups}
            label={rule.conditionGroups.all_required ? 'AND' : 'OR'}
         />
      </RowGroup>
   );
}
