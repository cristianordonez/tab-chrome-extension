import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';

interface Props {
   color: string;
}

export default function Circle({ color }: Props) {
   return <CircleIcon style={{ fill: color }} />;
}
