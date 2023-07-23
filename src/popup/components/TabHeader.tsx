import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RouteType } from '../../types';

interface Props {
   routes: RouteType[];
}

export default function TabHeader({ routes }: Props) {
   const [value, setValue] = useState<number>(0);
   //    const urls = routes.map((route) => route.path) as unknown as
   //       | string
   //       | PathPattern;
   //    const urls = ['/popup.html', '/saved'] as unknown as string | PathPattern;
   //    console.log('urls: ', urls);
   //    const routeMatch = useMatch(urls);
   //    const currentTab = routeMatch?.pattern?.path;

   const handleChange = (_e: any, newValue: any) => {
      setValue(newValue);
   };

   return (
      <>
         <Tabs
            value={value}
            textColor='primary'
            indicatorColor='primary'
            aria-label='Navigate between sections'
            onChange={handleChange}
         >
            {routes.map((route) => (
               <Tab
                  component={Link}
                  value={route.label}
                  label={route.label}
                  to={route.path}
               />
            ))}
         </Tabs>
      </>
   );
}
