import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import React from 'react';
import { Outlet } from 'react-router-dom';
import TabUtil from '../../utils/TabUtil';
import { routes } from '../routes';
import TabHeader from './navbar/TabHeader';

/**
 * Wrapper that will show application while also including the nav header
 * @returns React Component
 */
export default function RootWrapper() {
   return (
      <>
         <TabHeader routes={routes[0].children} />
         <Outlet />
         <OpenInFullIcon
            sx={{ position: 'absolute', bottom: 0 }}
            onClick={() => TabUtil.create({ url: 'popup.html' }, true, true)}
         />
      </>
   );
}
