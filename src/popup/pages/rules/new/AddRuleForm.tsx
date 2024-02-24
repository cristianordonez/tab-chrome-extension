import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Resolver } from 'react-hook-form';
import * as yup from 'yup';
import { ConditionValues, RuleType, actionRule } from '../../../../types';
import Rule from '../../../../utils/Rule';
import FormBody from '../../../components/FormBody';
import { useAlertProvider } from '../../../provider/AlertProvider';

const formSchema = yup.object().shape({
   title: yup.string().required('Please enter a title'),
   action: yup
      .mixed<actionRule>()
      .oneOf([0, 1, 2])
      .required('Please select an action'),
   groupName: yup.string().required('Please enter tab group name'),
   groupColor: yup.string().required('Please select color for tab groups'),
   active: yup.bool(),
   conditionGroups: yup.mixed().nullable(),
});

export default function AddRuleForm() {
   const { setAlertSettings } = useAlertProvider();

   const formOptions = {
      resolver: yupResolver(formSchema) as Resolver<
         ConditionValues | Partial<RuleType>
      >,
   };

   /**
    * Submits form
    * @param data
    * @returns void
    */
   const onSubmit = (data: RuleType | ConditionValues) => {
      try {
         const rule = Rule.build(data as RuleType);
         rule.save();
         setAlertSettings('success', 'Rule has been created!');
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Unable to create new rule.');
      }
   };

   return (
      <FormBody
         onSubmit={onSubmit}
         title={'Add Rule'}
         formOptions={formOptions}
      />
   );
}
