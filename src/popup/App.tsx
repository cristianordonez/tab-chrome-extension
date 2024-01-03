import { CssBaseline } from '@mui/material';
import {
   ThemeProvider,
   createTheme,
   responsiveFontSizes,
   styled,
} from '@mui/material/styles';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Center from './components/Center';
import ColorModeProvider, { useColorMode } from './provider/ColorModeProvider';
import ModalProvider from './provider/ModalProvider';
import PopupStatusProvider from './provider/PopupStatusProvider';
import { routes } from './routes';
import { getDesignTokens } from './theme';

const GlobalStyles = styled('div')({
   minWidth: '600px',
   minHeight: '800px',
   height: '1px',
});

export default function App() {
   const colorMode = useColorMode().colorMode;

   let theme = React.useMemo(
      () => createTheme(getDesignTokens(colorMode)),
      [colorMode]
   );
   theme = responsiveFontSizes(theme);

   const router = createBrowserRouter(routes);
   return (
      <ColorModeProvider>
         <ThemeProvider theme={theme}>
            <PopupStatusProvider>
               <ModalProvider>
                  <CssBaseline />
                  <GlobalStyles>
                     <Center column gap={1}>
                        <>
                           <RouterProvider router={router} />
                        </>
                     </Center>
                  </GlobalStyles>
               </ModalProvider>
            </PopupStatusProvider>
         </ThemeProvider>
      </ColorModeProvider>
   );
}
