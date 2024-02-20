import { Button, Typography } from '@mui/material';
import React from 'react';
import { UseFormArgs, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ConditionValues, RuleType, colors } from '../../types';
import Center from './Center';
import HookFormInput from './HookFormInput';
import HookFormSelect from './HookFormSelect';
import ConditionForm from './condition-form';

interface Props {
   onSubmit: (data: RuleType | ConditionValues) => void;
   title: string;
   formOptions: UseFormArgs;
}

export default function FormBody({ onSubmit, title, formOptions }: Props) {
   const navigate = useNavigate();

   /**
    * Create react hook form
    */
   const { handleSubmit, control, watch, reset } = useForm<
      RuleType | ConditionValues
   >(formOptions);

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

   const actionWatch = watch('action', 0);

   /**
    * Called on form submission
    * @param data values passed down to form
    */
   const submit = (data: RuleType | ConditionValues) => {
      onSubmit(data);
      reset();
      navigate(-1);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Center column>
            <>
               <Typography variant='h1'>{title}</Typography>
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
               <ConditionForm control={control} />
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
