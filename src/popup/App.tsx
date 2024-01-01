import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { CssBaseline, PaletteMode } from '@mui/material';
import {
   ThemeProvider,
   createTheme,
   responsiveFontSizes,
   styled,
} from '@mui/material/styles';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteType } from '../types';
import TabUtil from '../utils/TabUtil';
import Center from './components/Center';
import TabHeader from './components/TabHeader';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { usePopupWindowStatus } from './hooks/usePopupWindowState';
import CurrentGroups from './pages/current-groups';
import GroupRules from './pages/group-rules';
import SavedGroups from './pages/saved-groups';
import ModalProvider from './provider/ModalProvider';
import { getDesignTokens } from './theme';

export const ColorModeContext = React.createContext({
   toggleColorMode: () => {},
});

const GlobalStyles = styled('div')({
   minWidth: '600px',
   minHeight: '800px',
   height: '1px',
});

export default function App() {
   const isPopup = usePopupWindowStatus();
   const [mode, setMode] = useLocalStorageState('mode', 'dark');
   const routes: RouteType[] = [
      {
         path: '/popup.html',
         element: CurrentGroups,
         label: 'Current Groups',
      },
      {
         path: '/popup.html/saved',
         element: SavedGroups,
         label: 'Saved Groups',
      },
      {
         path: '/popup.html/rules',
         element: GroupRules,
         label: 'Rules',
      },
   ];

   const colorMode = React.useMemo(
      () => ({
         toggleColorMode: () => {
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
      <GlobalStyles>
         <BrowserRouter>
            <ColorModeContext.Provider value={colorMode}>
               <ThemeProvider theme={theme}>
                  <ModalProvider>
                     <CssBaseline />
                     <Center column gap={1}>
                        <>
                           {isPopup ? <></> : <h1>TEST</h1>}
                           <TabHeader routes={routes} />
                           <Routes>
                              {routes.map(({ path, element: Component }) => (
                                 <Route path={path} element={<Component />} />
                              ))}
                           </Routes>
                           <OpenInFullIcon
                              sx={{ position: 'absolute', bottom: 0 }}
                              onClick={() =>
                                 TabUtil.create(
                                    { url: 'popup.html' },
                                    true,
                                    true
                                 )
                              }
                           />
                        </>
                     </Center>
                  </ModalProvider>
               </ThemeProvider>
            </ColorModeContext.Provider>
         </BrowserRouter>
      </GlobalStyles>
   );
}
