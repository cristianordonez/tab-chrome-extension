import { PaletteMode } from '@mui/material';
import React, { ReactNode, useContext } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

export const ColorModeContext = React.createContext({
   colorMode: 'dark' as PaletteMode,
   toggleColorMode: () => {},
});

interface Props {
   children: ReactNode;
}

export default function ColorModeProvider({ children }: Props) {
   const [colorMode, setColorMode] = useLocalStorageState('mode', 'dark');
   const toggleColorMode = () => {
      localStorage.setItem('mode', colorMode === 'light' ? 'dark' : 'light');
      setColorMode((prevMode: PaletteMode) =>
         prevMode === 'light' ? 'dark' : 'light'
      );
   };
   return (
      <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
         {children}
      </ColorModeContext.Provider>
   );
}

export const useColorMode = () => {
   const { colorMode, toggleColorMode } = useContext(ColorModeContext);
   return { colorMode, toggleColorMode };
};
