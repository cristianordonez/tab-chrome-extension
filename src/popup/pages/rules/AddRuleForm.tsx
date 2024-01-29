import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
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
   const { state } = useLocation();
   const { setAlertSettings } = useAlertProvider();
   const [subRules, setSubRules] = useState<SubRule[]>([]);
   const { getOutput } = useModal();

   const formOptions = {
      resolver: yupResolver(formSchema) as Resolver<SubRuleValues | RuleType>,
   };

   /**
    * todo
    */
   const updateDefaults = async () => {
      if (state) {
         const { ruleId } = state;
         const rule = await Rule.getById(ruleId);
         const data = rule?.getData();
         console.log('data: ', data);
         // get value of rule from state
         // use these values as default values in the form
      }
   };

   console.log('state: ', state);
   useEffect(() => {
      updateDefaults();
   }, []);

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
         reset();
         navigate(-1);
      } catch (err) {
         console.error(err);
         setAlertSettings('error', 'Unable to create new rule.');
      }
   };

   /**
    * Items used for select action element
    */
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

   /**
    * Items used for select group color element
    */
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

   /**
    * Watches action value to remove group color select if needed
    */
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
