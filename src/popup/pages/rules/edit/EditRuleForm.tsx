import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Resolver, UseFormArgs } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { ConditionValues, RuleType } from '../../../../types';
import Rule from '../../../../utils/Rule';
import formSchema from '../../../../utils/formSchema';
import FormBody from '../../../components/rule-form';
import { useAlertProvider } from '../../../provider/AlertProvider';

export default function EditRuleForm() {
   const { setAlertSettings } = useAlertProvider();
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
            setFormOptions({
               defaultValues: data,
               resolver: yupResolver(formSchema) as unknown as Resolver<
                  ConditionValues | Partial<RuleType>
               >,
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
    * Submits form to update rule in storage
    * @param data
    * @returns void
    */
   const onSubmit = async (data: RuleType | ConditionValues) => {
      try {
         const updatedData = data as RuleType;
         const rule = Rule.build(updatedData);
         await rule.update(updatedData);
         setAlertSettings('success', 'Rule has been updated!');
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Unable to update rule.');
      }
   };

   return (
      <>
         {Object.keys(formOptions).length ? (
            <FormBody
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
