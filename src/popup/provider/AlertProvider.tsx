import { AlertColor } from '@mui/material';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { AlertSettings } from '../../types';
import CustomAlert from '../components/CustomAlert';

type AlertContextType = {
   alertSettings: {
      isOpen: boolean;
      alertSeverity: AlertColor;
      alertMessage: string;
   };
   setAlertSettings: (
      alertSeverity?: AlertColor,
      alertMessage?: string
   ) => void;
};
export const AlertContext = createContext<AlertContextType>({
   alertSettings: { isOpen: false, alertSeverity: 'success', alertMessage: '' },
   setAlertSettings: () => {},
});

const defaultAlertSettings: AlertSettings = {
   isOpen: false,
   alertSeverity: 'success',
   alertMessage: '',
};

interface Props {
   children: ReactNode;
}

export default function AlertProvider({ children }: Props) {
   const [alertSettings, setState] =
      useState<AlertSettings>(defaultAlertSettings);

   const setAlertSettings = (
      alertSeverity?: AlertColor,
      alertMessage?: string
   ): undefined => {
      const currentSettings = { ...alertSettings };
      if (alertSeverity !== undefined) {
         currentSettings.alertSeverity = alertSeverity;
      }
      if (alertMessage !== undefined) {
         currentSettings.alertMessage = alertMessage;
      }
      currentSettings.isOpen = !alertSettings.isOpen;
      setState(currentSettings);
   };

   /**
    * Handles closing alert component
    */
   const handleAlert = () => {
      setAlertSettings();
   };

   return (
      <AlertContext.Provider value={{ alertSettings, setAlertSettings }}>
         {children}
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </AlertContext.Provider>
   );
}

export const useAlertProvider = () => {
   const { alertSettings, setAlertSettings } = useContext(AlertContext);
   return { alertSettings, setAlertSettings };
};
