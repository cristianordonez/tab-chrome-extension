import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Resolver } from 'react-hook-form';
import { ConditionValues, RuleType } from '../../../../types';
import Rule from '../../../../utils/Rule';
import formSchema from '../../../../utils/formSchema';
import FormBody from '../../../components/FormBody';
import { useAlertProvider } from '../../../provider/AlertProvider';

export default function AddRuleForm() {
   const { setAlertSettings } = useAlertProvider();

   const formOptions = {
      resolver: yupResolver(formSchema) as unknown as Resolver<
         ConditionValues | Partial<RuleType>
      >,
   };

   /**
    * Submits form
    * @param data
    * @returns void
    */
   const onSubmit = async (data: RuleType | ConditionValues) => {
      try {
         const rule = Rule.build(data as RuleType);
         await rule.save();
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
