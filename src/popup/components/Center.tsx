import { styled } from '@mui/material/styles';
import React from 'react';

const StyledCenter = styled('div', {
   shouldForwardProp: (prop) => prop !== 'direction',
})<{ column?: boolean }>(({ column }) => ({
   display: 'flex',
   flexDirection: column ? 'column' : 'row',
   width: '100%',
   height: '100%',
   gap: '1em',
}));

interface Props {
   children: React.ReactElement;
   column?: boolean;
}

export default function Center({ children, column = false }: Props) {
   return <StyledCenter column={column}>{children}</StyledCenter>;
}
