import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Resolver } from 'react-hook-form';
import * as yup from 'yup';
import { ConditionValues, RuleType, actionRule } from '../../../../types';
import Rule from '../../../../utils/Rule';
import FormBody from '../../../components/FormBody';
import { useAlertProvider } from '../../../provider/AlertProvider';

const formSchema = yup.object().shape({
   title: yup.string().required('Please enter a query'),
   action: yup.mixed<actionRule>().oneOf([0, 1, 2]),
   groupName: yup.string(),
   groupColor: yup.string(),
   active: yup.bool(),
});

export default function AddRuleForm() {
   const { setAlertSettings } = useAlertProvider();
   // const [conditionGroups, setConditionGroups] =
   //    useState<AllConditionGroupsType>({ all_required: false, groups: [] });

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
         const ruleData = {
            ...data,
            // conditionGroups: conditionGroups,
         } as RuleType;
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
         // conditionGroups={conditionGroups}
         // setConditionGroups={setConditionGroups}
         onSubmit={onSubmit}
         title={'Add Rule'}
         formOptions={formOptions}
      />
   );
}
