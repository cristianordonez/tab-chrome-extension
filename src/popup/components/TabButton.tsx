import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const StyledTabButton = styled.p<{ active: boolean }>`
   border-bottom: ${(props) =>
      props.active
         ? `2px solid ${props.theme.colors.primary} `
         : `2px solid ${props.theme.colors.divider}`};
   padding: 5em;
   border-bottom: 2px solid #bf4f74;
`;

interface Props {
   activeIndex: number;
   label: string;
   index: number;
   handleClick: Dispatch<SetStateAction<number>>;
}

export const TabButton = ({
   activeIndex,
   index,
   label,
   handleClick,
}: Props) => {
   return (
      <StyledTabButton
         active={activeIndex == index}
         onClick={() => handleClick(index)}
      >
         {label}
      </StyledTabButton>
   );
};
