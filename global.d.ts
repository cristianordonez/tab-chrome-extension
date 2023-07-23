import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
   export interface PaletteOptions {
      primary: {
         main: string;
      };
      secondary: {
         main: string;
      };
      background: {
         default: string;
         paper: string;
      };
   }
}
