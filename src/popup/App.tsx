import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { CssBaseline, PaletteMode } from '@mui/material';
import {
   ThemeProvider,
   createTheme,
   responsiveFontSizes,
   styled,
} from '@mui/material/styles';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteType } from '../types';
import { tabGroupUtilInstance } from '../utils/tabGroupUtil';
import Center from './components/Center';
import TabHeader from './components/TabHeader';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import CurrentGroups from './pages/current-groups/CurrentGroups';
import GroupRules from './pages/group-rules/GroupRules';
import SavedGroups from './pages/saved-groups/SavedGroups';
import { getDesignTokens } from './theme';

export const ColorModeContext = React.createContext({
   toggleColorMode: () => {},
});

const GlobalStyles = styled('div')({
   minWidth: '600px',
   minHeight: '800px',
});

export default function App() {
   const [mode, setMode] = useLocalStorageState('mode', 'dark');
   const routes: RouteType[] = [
      {
         path: '/popup.html',
         element: CurrentGroups,
         label: 'Current Groups',
      },
      {
         path: '/saved',
         element: SavedGroups,
         label: 'Saved Groups',
      },
      {
         path: '/rules',
         element: GroupRules,
         label: 'Rules',
      },
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

   useEffect(() => {
      const updateSnapshot = async () => {
         await tabGroupUtilInstance.takeSnapshot();
      };
      updateSnapshot();
   }, []);

   return (
      <GlobalStyles>
         <BrowserRouter>
            <ColorModeContext.Provider value={colorMode}>
               <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Center column gap={1}>
                     <>
                        <TabHeader routes={routes} />
                        <Routes>
                           {routes.map(({ path, element: Component }) => (
                              <Route path={path} element={<Component />} />
                           ))}
                        </Routes>
                        <OpenInFullIcon
                           onClick={() =>
                              chrome.tabs.create({ url: 'popup.html' })
                           }
                        />
                     </>
                  </Center>
               </ThemeProvider>
            </ColorModeContext.Provider>
         </BrowserRouter>
      </GlobalStyles>
   );
}
