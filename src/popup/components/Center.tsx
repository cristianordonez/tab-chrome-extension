import { styled } from '@mui/material/styles';
import React from 'react';

const StyledCenter = styled('div', {
   shouldForwardProp: (prop) => prop !== 'column',
})<{ column?: boolean; gap?: number }>(({ column, gap }) => ({
   display: 'flex',
   flexDirection: column ? 'column' : 'row',
   width: '100%',
   height: '100%',
   gap: `${gap}em`,
}));

interface Props {
   children: React.ReactElement;
   column?: boolean;
   gap?: number;
}

export default function Center({ children, column = false, gap = 0 }: Props) {
   return (
      <StyledCenter column={column} gap={gap}>
         {children}
      </StyledCenter>
   );
}
