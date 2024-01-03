import React from 'react';
import { RouteType } from '../../types';
import RootWrapper from '../pages/';
import CurrentGroups from '../pages/current-groups';
import AddRuleForm from '../pages/rules/AddRuleForm';
import RulesList from '../pages/rules/RulesList';
import SavedGroups from '../pages/saved-groups';

export const routes: RouteType[] = [
   {
      path: '/popup.html',
      element: <RootWrapper />,
      children: [
         {
            path: '/popup.html',
            element: <CurrentGroups />,
            label: 'Current Groups',
         },
         {
            path: 'saved',
            element: <SavedGroups />,
            label: 'Saved Groups',
         },
         {
            path: 'rules',
            // element: <Rules />,
            label: 'Rules',
            children: [
               {
                  //   path: 'new',
                  index: true,
                  element: <RulesList />,
               },
               {
                  path: 'new',
                  element: <AddRuleForm />,
               },
            ],
         },
      ] as RouteType[],
   },
];
