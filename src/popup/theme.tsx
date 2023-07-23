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
                 //   default: '#FFFFFF',
                 paper: '#0F0F0F',
              },
           }),
   },
   typography: {
      fontFamily: ['Open', 'Sans'].join(','),
   },
});
//    colors: {
//       primary: '#AE71EA',
//       secondary: '#4355FA',
//       background: '#000000',
//       card: '#0F0F0F',
//       text: '#FFFFFF',
//       border: '#3A3A3A',
//       notification: '#0F0F0F',
//       error: '#EF4444',
//       button: '#9CA5F2',
//       success: '#4BD37B',
//       black: '#FFFFFF',
//    },
//    font: 'Open Sans',
// };
