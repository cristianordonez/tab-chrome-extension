import { CssBaseline, PaletteMode } from '@mui/material';
import {
   ThemeProvider,
   createTheme,
   responsiveFontSizes,
} from '@mui/material/styles';
import React from 'react';
import { FaExpandAlt } from 'react-icons/fa';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { tabs } from 'webextension-polyfill';
import { RouteType } from '../types';
import Center from './components/Center';
import TabHeader from './components/TabHeader';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import CurrentWorkspace from './pages/current-workspaces/CurrentWorkspace';
import SavedWorkspaces from './pages/saved-workspaces/SavedWorkspaces';
import { getDesignTokens } from './theme';

export const ColorModeContext = React.createContext({
   toggleColorMode: () => {},
});

export default function App() {
   const [mode, setMode] = useLocalStorageState('mode', 'dark');
   const routes: RouteType[] = [
      {
         path: '/popup.html',
         element: CurrentWorkspace,
         label: 'Current Workspace',
      },
      { path: '/saved', element: SavedWorkspaces, label: 'Saved Workspaces' },
   ];

   const colorMode = React.useMemo(
      () => ({
         toggleColorMode: () => {
            // The dark mode switch would invoke this method
            localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
            setMode((prevMode: PaletteMode) =>
               prevMode === 'light' ? 'dark' : 'light'
            );
         },
      }),
      []
   );

   let theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
   theme = responsiveFontSizes(theme);
   return (
      <BrowserRouter>
         <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
               <CssBaseline />
               <Center>
                  <>
                     <TabHeader routes={routes} />
                     {/* <TabGroup direction='row'>
                        {routes.map((route) => (
                           <TabLink
                              label={route.label}
                              key={route.label}
                              route={route.path}
                           />
                        ))}
                     </TabGroup> */}
                     <Routes>
                        {routes.map(({ path, element: Component }) => (
                           <Route path={path} element={<Component />} />
                        ))}
                     </Routes>
                     <FaExpandAlt
                        onClick={() => tabs.create({ url: 'popup.html' })}
                     />
                  </>
               </Center>
            </ThemeProvider>
         </ColorModeContext.Provider>
      </BrowserRouter>
   );
}
