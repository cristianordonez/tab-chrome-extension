import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
   palette: {
      mode,
      primary: {
         ...(mode === 'dark'
            ? {
                 main: '#AE71EA',
                 contrastText: '#000',
              }
            : { main: '#336E7B', contrastText: '#fff' }),
      },
      secondary: {
         ...(mode === 'dark'
            ? {
                 main: '#4355FA',
              }
            : { main: '#8859B6' }),
      },
      ...(mode === 'dark'
         ? {
              background: {
                 default: '#000000',
                 paper: '#1C1E1F',
              },
           }
         : {
              background: {
                 default: '#000000',
                 paper: '#0F0F0F',
              },
           }),
   },
   typography: {
      fontFamily: 'Open Sans',
   },
});
