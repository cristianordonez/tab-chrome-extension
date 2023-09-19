import '@mui/material/styles/createPalette';

// index.d.ts
declare module '@mui/private-theming' {
   import type { Theme } from '@mui/material/styles';

   interface DefaultTheme extends Theme {}
}

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
