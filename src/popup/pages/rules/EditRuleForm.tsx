import React, { useEffect, useState } from 'react';
import { UseFormArgs } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Condition, ConditionValues, RuleType } from '../../../types';
import Rule from '../../../utils/Rule';
import FormBody from '../../components/FormBody';
import { useAlertProvider } from '../../provider/AlertProvider';

export default function AddRuleForm() {
   const { setAlertSettings } = useAlertProvider();
   const [conditions, setConditions] = useState<Condition[]>([]);
   const { state } = useLocation();
   const [formOptions, setFormOptions] = useState<UseFormArgs>({});

   useEffect(() => {
      updateDefaults();
   }, []);

   /**
    * Get default values from rule using rule ID
    */
   const updateDefaults = async () => {
      if (state) {
         const { ruleId } = state;
         const rule = await Rule.getById(ruleId);
         const data = rule?.getData();
         console.log('data: ', data);
         if (data) {
            const { title, action, groupName, groupColor, active } = data;
            setFormOptions({
               defaultValues: { title, action, groupName, groupColor, active },
            });
            // setConditions(conditions);
         } else {
            console.error(
               `Unable to find data regarding rule with id ${ruleId}`
            );
            setAlertSettings('error', 'Something went wrong.');
         }
      }
   };

   /**
    * Submits form
    * @param data
    * @returns void
    */
   const onSubmit = (data: RuleType | ConditionValues) => {
      try {
         const ruleData = { ...data, conditions } as RuleType;
         const rule = Rule.build(ruleData);
         rule.save();
         setAlertSettings('success', 'Rule has been created!');
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Unable to create new rule.');
      }
   };

   return (
      <>
         {Object.keys(formOptions).length ? (
            <FormBody
               conditions={conditions}
               setConditions={setConditions}
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
