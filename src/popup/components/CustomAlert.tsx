import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import { AlertSettings } from '../../types';

interface Props {
   handleAlert: (event: React.SyntheticEvent | Event) => void;
   alertSettings: AlertSettings;
}

export default function CustomAlert({ handleAlert, alertSettings }: Props) {
   return (
      <Snackbar
         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
         open={alertSettings.isOpen}
         autoHideDuration={4000}
         onClose={handleAlert}
      >
         <Alert onClose={handleAlert} severity={alertSettings.alertSeverity}>
            {alertSettings.alertMessage}
         </Alert>
      </Snackbar>
   );
}
