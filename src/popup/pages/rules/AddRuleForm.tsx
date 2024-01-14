import { yupResolver } from '@hookform/resolvers/yup';
import { Button, List, ListItemButton, Typography } from '@mui/material';
import React from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { RuleType, SubRuleValues, actionRule, colors } from '../../../types';
import Center from '../../components/Center';
import HookFormInput from '../../components/HookFormInput';
import HookFormSelect from '../../components/HookFormSelect';
import { useAlertProvider } from '../../provider/AlertProvider';
import { useModal } from '../../provider/ModalProvider';

const formSchema = yup.object().shape({
   title: yup.string().required('Please enter a query'),
   action: yup.mixed<actionRule>().oneOf([0, 1, 2]),
   subRules: yup.array(),
   groupName: yup.string(),
   groupColor: yup.string(),
   active: yup.bool(),
});

export default function AddRuleForm() {
   const navigate = useNavigate();
   const { setAlertSettings } = useAlertProvider();
   const { getOutput } = useModal();

   const formOptions = {
      resolver: yupResolver(formSchema) as Resolver<SubRuleValues | RuleType>,
   };
   const { handleSubmit, control, watch } = useForm<RuleType | SubRuleValues>(
      formOptions
   );
   const onSubmit = (data: RuleType | SubRuleValues) => console.log(data);
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

   const actionWatch = watch('action', 0);
   const subRuleWatch = watch('subRules', []);

   const handleAddSubRule = async () => {
      const output = await getOutput({
         title: 'Add Condition',
         type: 'subrule',
      });

      console.log('output: ', output);
      setAlertSettings('error', 'test');
   };

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
               <div>
                  <h1>Conditions</h1>
                  <List>
                     {subRuleWatch.map((subRule) => (
                        <h1>{subRule.query}</h1>
                     ))}
                     <ListItemButton onClick={handleAddSubRule}>
                        Add Condition
                     </ListItemButton>
                  </List>
               </div>
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
