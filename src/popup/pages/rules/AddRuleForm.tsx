import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {
   RuleType,
   SubRule,
   SubRuleValues,
   actionRule,
   colors,
} from '../../../types';
import Rule from '../../../utils/Rule';
import Center from '../../components/Center';
import HookFormInput from '../../components/HookFormInput';
import HookFormSelect from '../../components/HookFormSelect';
import { useAlertProvider } from '../../provider/AlertProvider';
import { useModal } from '../../provider/ModalProvider';
import SubRulesForm from './SubRulesForm';

const formSchema = yup.object().shape({
   title: yup.string().required('Please enter a query'),
   action: yup.mixed<actionRule>().oneOf([0, 1, 2]),
   groupName: yup.string(),
   groupColor: yup.string(),
   active: yup.bool(),
});

export default function AddRuleForm() {
   const navigate = useNavigate();
   const { setAlertSettings } = useAlertProvider();
   const [subRules, setSubRules] = useState<SubRule[]>([]);
   const { getOutput } = useModal();

   const formOptions = {
      resolver: yupResolver(formSchema) as Resolver<SubRuleValues | RuleType>,
   };

   const { handleSubmit, control, watch, reset } = useForm<
      RuleType | SubRuleValues
   >(formOptions);

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
         // todo navigate back to last page once submitted and reset form if needed
         reset();
         navigate(-1);
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Unable to create new rule.');
      }
   };

   const menuItems = [
      { value: 0, label: 'Add tab to a tab group' },
      { value: 1, label: 'Pin tab' },
      { value: 2, label: 'Open tab in new window' },
   ];

   /**
    * Goes back 1 page when cancel button is clicked
    */
   const handleCancel = () => {
      navigate(-1);
   };

   const colorItems = colors.map((color) => {
      return { label: color, value: color };
   });

   /**
    * Called when adding new condition button
    */
   const handleAddSubRule = async () => {
      const output = await getOutput({
         title: 'Add Condition',
         type: 'subrule',
      });
      if (output) {
         setSubRules([...subRules, JSON.parse(output)]);
      }
   };

   const actionWatch = watch('action', 0);

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Center column>
            <>
               <Typography variant='h1'>Add Rule</Typography>
               <HookFormInput
                  label='Enter Rule Title'
                  control={control}
                  name='title'
               />
               <HookFormSelect
                  name='action'
                  control={control}
                  menuItems={menuItems}
                  label='Select Action'
               />
               {actionWatch == 0 ? (
                  <>
                     <HookFormInput
                        label='Enter Group Name'
                        control={control}
                        name='groupName'
                     />
                     <HookFormSelect
                        name='groupColor'
                        control={control}
                        label='Enter Group Color'
                        menuItems={colorItems}
                     />
                  </>
               ) : null}
               <SubRulesForm
                  subRules={subRules}
                  handleAddSubRule={handleAddSubRule}
               />
               <div>
                  <Button type='submit' variant='contained' color='success'>
                     Submit
                  </Button>
                  <Button
                     variant='contained'
                     color='error'
                     onClick={handleCancel}
                  >
                     Cancel
                  </Button>
               </div>
            </>
         </Center>
      </form>
   );
}
