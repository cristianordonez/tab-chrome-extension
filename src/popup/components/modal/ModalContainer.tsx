import { Dialog, DialogTitle } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { ReactElement } from 'react';

interface Props {
   title?: string;
   handleClose: () => void;
   open: boolean;
   children: ReactElement;
}

export default function ModalContainer({
   title,
   open,
   handleClose,
   children,
}: Props) {
   const theme = useTheme();
   return (
      <Dialog
         open={open}
         onClose={handleClose}
         fullWidth
         maxWidth='xs'
         PaperProps={{
            style: { backgroundColor: theme.palette.background.paper },
         }}
      >
         {title !== undefined ? <DialogTitle>{title}</DialogTitle> : <></>}
         {children}
      </Dialog>
   );
}
