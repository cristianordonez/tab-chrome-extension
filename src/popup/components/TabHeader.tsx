import { Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { RouteType } from '../../types';

interface Props {
   routes: RouteType[];
}

export default function TabHeader({ routes }: Props) {
   const [value, setValue] = useState<number>(0);

   const handleChange = (
      _e: SyntheticEvent<Element, Event>,
      newValue: number
   ) => {
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
            centered
         >
            {routes.map((route, i) => (
               <Tab
                  component={Link}
                  value={i}
                  label={route.label}
                  to={route.path}
                  sx={{ fontWeight: '700' }}
               />
            ))}
         </Tabs>
      </>
   );
}
