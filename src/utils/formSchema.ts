import * as yup from 'yup';
import { actionRule } from '../types';

const formSchema = yup.object().shape({
   title: yup.string().required('Please enter a title'),
   action: yup
      .mixed<actionRule>()
      .oneOf([0, 1, 2])
      .required('Please select an action'),
   groupName: yup.string().when('action', {
      is: 0,
      then: () => yup.string().required('Please select a group name'),
   }),
   groupColor: yup.string().when('action', {
      is: 0,
      then: () => yup.string().required('Please select a group color'),
   }),
   active: yup.bool(),
   conditionGroups: yup.object().shape({
      all_required: yup.bool(),
      groups: yup
         .array()
         .min(1, 'At least 1 condition is required to create a rule')
         .required()
         .of(
            yup.object().shape({
               all_required: yup.bool(),
               conditions: yup
                  .array()
                  .min(
                     1,
                     'Please provide at least 1 condition for current group'
                  )
                  .required()
                  .of(
                     yup.object().shape({
                        url: yup.string().required('Please provide url'),
                        match: yup
                           .string()
                           .required('Please provide match condition'),
                        query: yup.string().required('Please enter a query'),
                     })
                  ),
            })
         ),
   }),
});

export default formSchema;
