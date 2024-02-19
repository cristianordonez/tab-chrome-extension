import React from 'react';
import StyledIconButton from './StyledIconButton';
import StyledListItemIcon from './StyledListItemIcon';

interface Props {
   children: React.ReactNode;
   marginRight?: boolean;
   hover?: boolean;
   handleClick?:
      | (React.MouseEventHandler<HTMLDivElement> &
           React.MouseEventHandler<HTMLButtonElement>)
      | undefined;
}

/**
 * Item in Row component
 * @param props
 *     children: react children,
 *     marginRight: will provide 4em margin if true
 *     hover: if true will show hover effect. Can only be used if handleClick is provided
 *     handleClick: click handler
 * @returns ReactNode
 */
export default function RowItemWrapper({
   children,
   marginRight = false,
   hover = false,
   handleClick,
}: Props) {
   if (handleClick) {
      return (
         <StyledIconButton
            hover={hover}
            onClick={handleClick}
            marginRight={marginRight}
         >
            {children}
         </StyledIconButton>
      );
   } else {
      return (
         <StyledListItemIcon marginRight={marginRight}>
            {children}
         </StyledListItemIcon>
      );
   }
}
