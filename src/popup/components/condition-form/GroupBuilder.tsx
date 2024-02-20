import { styled } from '@mui/system';
import React from 'react';
import StyledChip from '../StyledChip';

interface Props {
   childrenArr: React.ReactNode[];
   label: string;
}

interface StyledRowProps {
   indent?: boolean;
}

const StyledDiv = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
});

const StyledRow = styled('div')<StyledRowProps>(({ indent }) => ({
   width: indent ? '95%' : '100%',
   height: '100%',
   alignSelf: 'flex-end',
}));

export default function GroupBuilder({ childrenArr, label }: Props) {
   return (
      <StyledDiv>
         {childrenArr.map((Child, i) => {
            return (
               <>
                  {i > 0 ? <StyledChip label={label} color='primary' /> : null}
                  <StyledRow indent={childrenArr.length > 1}>{Child}</StyledRow>
               </>
            );
         })}
      </StyledDiv>
   );
}
