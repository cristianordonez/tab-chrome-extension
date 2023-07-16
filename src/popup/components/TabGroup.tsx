import styled from 'styled-components';

export const TabGroup = styled.div<{ direction?: 'row' | 'column' }>`
   display: flex;
   flex-direction: ${(props) => (props.direction == 'row' ? 'row' : 'column')};
   align-items: center;
   justify-content: space-between;
   gap: 0;
   font-size: 1em;
   margin: 1em;
`;
