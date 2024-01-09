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

/**
 * Custom component to be used for simple forms where
 * react-hook-forms do not need to be used
 * @param param0 Props object
 * @returns React component
 */
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
         onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
         }
      />
   );
}
