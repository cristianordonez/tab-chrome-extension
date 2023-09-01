import { TextField } from '@mui/material';
import React, {
   ChangeEvent,
   Dispatch,
   HTMLInputTypeAttribute,
   SetStateAction,
} from 'react';

interface Props {
   label?: string;
   id?: string;
   type?: HTMLInputTypeAttribute;
   value: string;
   setValue: Dispatch<SetStateAction<string>>;
}

export default function Input({
   value,
   setValue,
   label = '',
   id = '',
   type = 'text',
}: Props) {
   return (
      <TextField
         autoFocus
         margin='dense'
         id={id}
         value={value}
         label={label}
         type={type}
         fullWidth
         variant='standard'
         onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
         }
      />
   );
}
