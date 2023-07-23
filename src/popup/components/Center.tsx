import { styled } from '@mui/material/styles';
import React from 'react';

const StyledCenter = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justfiyContent: 'center',
   width: '100%',
   height: '100%',
   // backgroundColor: theme.palette.background.default,
});

interface Props {
   children: React.ReactElement;
}

export default function Center({ children }: Props) {
   return <StyledCenter>{children}</StyledCenter>;
}
