import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Resolver } from 'react-hook-form';
import * as yup from 'yup';
import {
   Condition,
   ConditionValues,
   RuleType,
   actionRule,
} from '../../../types';
import Rule from '../../../utils/Rule';
import FormBody from '../../components/FormBody';
import { useAlertProvider } from '../../provider/AlertProvider';

const formSchema = yup.object().shape({
   title: yup.string().required('Please enter a query'),
   action: yup.mixed<actionRule>().oneOf([0, 1, 2]),
   groupName: yup.string(),
   groupColor: yup.string(),
   active: yup.bool(),
});

export default function AddRuleForm() {
   const { setAlertSettings } = useAlertProvider();
   const [conditions, setConditions] = useState<Condition[]>([]);

   const formOptions = {
      resolver: yupResolver(formSchema) as Resolver<ConditionValues | RuleType>,
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
      <FormBody
         conditions={conditions}
         setConditions={setConditions}
         onSubmit={onSubmit}
         title={'Add Rule'}
         formOptions={formOptions}
      />
   );
}
