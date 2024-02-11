import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Resolver } from 'react-hook-form';
import * as yup from 'yup';
import { RuleType, SubRule, SubRuleValues, actionRule } from '../../../types';
import Rule from '../../../utils/Rule';
import { useAlertProvider } from '../../provider/AlertProvider';
import FormBody from './FormBody';

const formSchema = yup.object().shape({
   title: yup.string().required('Please enter a query'),
   action: yup.mixed<actionRule>().oneOf([0, 1, 2]),
   groupName: yup.string(),
   groupColor: yup.string(),
   active: yup.bool(),
});

export default function AddRuleForm() {
   const { setAlertSettings } = useAlertProvider();
   const [subRules, setSubRules] = useState<SubRule[]>([]);

   const formOptions = {
      resolver: yupResolver(formSchema) as Resolver<SubRuleValues | RuleType>,
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
      <FormBody
         subRules={subRules}
         setSubRules={setSubRules}
         onSubmit={onSubmit}
         title={'Add Rule'}
         formOptions={formOptions}
      />
   );
}
