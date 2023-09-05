import { AlertColor } from '@mui/material';
import { useState } from 'react';
import { AlertSettings } from '../../types';

const defaultAlertSettings: AlertSettings = {
   isOpen: false,
   alertSeverity: 'success',
   alertMessage: '',
};

// hook that allows updating severity and alert message with one call
export default function useAlertSettings() {
   const [alertSettings, setState] =
      useState<AlertSettings>(defaultAlertSettings);

   const updateSettings = (
      alertSeverity?: AlertColor,
      alertMessage?: string
   ) => {
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

   return [alertSettings, updateSettings] as const;
}
