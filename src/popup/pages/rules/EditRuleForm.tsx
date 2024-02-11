import React, { useEffect, useState } from 'react';
import { UseFormArgs } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { RuleType, SubRule, SubRuleValues } from '../../../types';
import Rule from '../../../utils/Rule';
import { useAlertProvider } from '../../provider/AlertProvider';
import FormBody from './FormBody';

// const formSchema = yup.object().shape({
//    title: yup.string().required('Please enter a query'),
//    action: yup.mixed<actionRule>().oneOf([0, 1, 2]),
//    groupName: yup.string(),
//    groupColor: yup.string(),
//    active: yup.bool(),
// });

export default function AddRuleForm() {
   const { setAlertSettings } = useAlertProvider();
   const [subRules, setSubRules] = useState<SubRule[]>([]);
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
         if (data) {
            const { title, action, groupName, groupColor, active } = data;
            setFormOptions({
               defaultValues: { title, action, groupName, groupColor, active },
            });
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
   const onSubmit = (data: RuleType | SubRuleValues) => {
      try {
         const ruleData = { ...data, subRules } as RuleType;
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
               subRules={subRules}
               setSubRules={setSubRules}
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
