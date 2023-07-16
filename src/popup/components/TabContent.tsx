import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTabContent = styled.div<{ active: boolean }>`
   display: ${(props) => (props.active ? `flex` : `none`)};
   width: 100%;
   height: 100%;
`;

interface Props {
   activeIndex: number;
   index: number;
   children: ReactNode;
}

export const TabContent = ({ activeIndex, index, children }: Props) => {
   return (
      <StyledTabContent active={activeIndex == index}>
         {children}
      </StyledTabContent>
   );
};
