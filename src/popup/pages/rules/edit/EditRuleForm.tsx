import React, { useEffect, useState } from 'react';
import { UseFormArgs } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import {
   AllConditionGroupsType,
   ConditionValues,
   RuleType,
} from '../../../../types';
import Rule from '../../../../utils/Rule';
import FormBody from '../../../components/FormBody';
import { useAlertProvider } from '../../../provider/AlertProvider';

export default function AddRuleForm() {
   const { setAlertSettings } = useAlertProvider();
   const [conditionGroups, setConditionGroups] =
      useState<AllConditionGroupsType>({ all_required: false, groups: [] });
   const { state } = useLocation();
   const [formOptions, setFormOptions] = useState<UseFormArgs>({});

   useEffect(() => {
      updateDefaults();
   }, []);

   /**
    * Gets info about rule from rule id in state and updates default values
    */
   const updateDefaults = async () => {
      if (state) {
         const { ruleId } = state;
         const rule = await Rule.getById(ruleId);
         const data = rule?.getData();
         if (data) {
            const {
               conditionGroups,
               title,
               action,
               groupName,
               groupColor,
               active,
            } = data;
            setFormOptions({
               defaultValues: { title, action, groupName, groupColor, active },
            });
            if (conditionGroups == undefined) {
               throw new Error(
                  `Could not get conditions from current rule with id of ${ruleId}`
               );
            }
            setConditionGroups(conditionGroups);
         } else {
            console.error(
               `Unable to find data regarding rule with id ${ruleId}`
            );
            setAlertSettings('error', 'Something went wrong.');
         }
      }
   };

   /**
    * todo Submits form
    * @param data
    * @returns void
    */
   const onSubmit = (data: RuleType | ConditionValues) => {
      try {
         const ruleData = {
            ...data,
            conditionGroups: conditionGroups,
         } as RuleType;
         // const rule = Rule.build(ruleData);
         // rule.save();
         console.log('ruleData: ', ruleData);
         // setAlertSettings('success', 'Rule has been created!');
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Unable to create new rule.');
      }
   };

   return (
      <>
         {Object.keys(formOptions).length ? (
            <FormBody
               // conditionGroups={conditionGroups}
               // setConditionGroups={setConditionGroups}
               onSubmit={onSubmit}
               title={'Edit Rule'}
               formOptions={formOptions}
            />
         ) : (
            <></>
         )}
      </>
   );
}
