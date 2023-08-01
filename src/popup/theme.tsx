import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
   palette: {
      mode,
      primary: {
         ...(mode === 'dark'
            ? {
                 main: '#AE71EA',
              }
            : { main: '#336E7B' }),
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
                 paper: '#0F0F0F',
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
