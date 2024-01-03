import React from 'react';
import { RouteType } from '../types';
import RootWrapper from './pages';
import CurrentGroups from './pages/current-groups';
import Rules from './pages/rules';
import SavedGroups from './pages/saved-groups';

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
            path: '/popup.html/saved',
            element: <SavedGroups />,
            label: 'Saved Groups',
         },
         {
            path: '/popup.html/rules',
            element: <Rules />,
            label: 'Rules',
         },
      ] as RouteType[],
   },
];
