import React from 'react';
import { Outlet } from 'react-router-dom';
import RulesList from './RulesList';

export default function Rules() {
   return (
      <>
         <RulesList />
         <Outlet />
      </>
   );
}
