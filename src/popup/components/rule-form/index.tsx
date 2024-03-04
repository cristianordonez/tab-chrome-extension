import { Button, Typography } from '@mui/material';
import React from 'react';
import { UseFormArgs, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { ConditionValues, RuleType, colors } from '../../../types';
import Center from '../Center';
import HookFormInput from '../HookFormInput';
import HookFormSelect from '../HookFormSelect';
import ConditionForm from './ConditionForm';

interface Props {
   onSubmit: (data: RuleType | ConditionValues) => Promise<void>;
   title: string;
   formOptions: UseFormArgs;
}

/**
 * Form used for creating or adding rules
 * @param props
 * onSubmit: function  to call when submitting form
 * title: will be displayed in h1 tag
 * formOptions: arguments passed to react hook forms useForms hook
 * @returns
 */
export default function RuleForm({ onSubmit, title, formOptions }: Props) {
   const navigate = useNavigate();
   const location = useLocation();
   const { pathname } = location;
   const {
      handleSubmit,
      control,
      watch,
      formState: { isDirty },
      reset,
   } = useForm<RuleType | ConditionValues>(formOptions);

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
    * Watch action so that certain inputs are rendered conditionally
    */
   const actionWatch = watch('action', 0);

   /**
    * Called on form submission
    * @param data values passed down to form
    */
   const submit = async (data: RuleType | ConditionValues) => {
      await onSubmit(data);
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
                  <Button
                     type='submit'
                     variant='contained'
                     color='success'
                     disabled={pathname.includes('edit') && isDirty == false}
                  >
                     {pathname.includes('edit') ? 'Save Changes' : 'Submit'}
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