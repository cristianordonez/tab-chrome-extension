import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, ListItemIcon, ListItemText } from '@mui/material';
import ListItemButton, {
   ListItemButtonProps,
} from '@mui/material/ListItemButton';
import { styled } from '@mui/system';
import React, { Dispatch, MouseEvent, SetStateAction } from 'react';

interface ListItemProps extends ListItemButtonProps {
   hover?: boolean;
}

const StyledListItemButton = styled(ListItemButton, {
   shouldForwardProp: (prop) => prop !== 'hover',
})<ListItemProps>(({ theme, hover }) => ({
   backgroundColor: theme.palette.background.paper,
   alignItems: 'center',
   justifyContent: 'flex-start',
   height: '100%',
   '&:hover': {
      // if hover is true, set the same as background color above
      backgroundColor: hover ? '' : theme.palette.background.paper,
      cursor: hover ? 'pointer' : 'default',
   },
}));

interface Props {
   id?: number;
   PrefixIcon?: React.ReactElement;
   prefixAction?: () => void;
   AffixIcon?: React.ReactElement;
   affixAction?: () => void;
   MiddleIcon?: React.ReactElement;
   middleAction?: () => void;
   setShowChildren?: Dispatch<SetStateAction<boolean>>;
   title: string;
   hasChildren?: boolean;
   isChild?: boolean;
   secondary?: string;
   showChildren?: boolean;
   handleClick?: () => void;
}

export default function Row({
   PrefixIcon,
   prefixAction,
   AffixIcon,
   affixAction,
   MiddleIcon,
   middleAction,
   setShowChildren,
   handleClick,
   title = '',
   hasChildren = false,
   isChild = false,
   secondary = '',
   showChildren = false,
}: Props) {
   const arrowIcon = showChildren ? (
      <ExpandMoreIcon fontSize='large' />
   ) : (
      <ChevronRightIcon fontSize='large' />
   );

   const handleMainClick = (e: MouseEvent<SVGSVGElement | HTMLElement>) => {
      e.stopPropagation();
      if (handleClick) {
         handleClick();
      }
   };

   const handlePrefixAction = (e: MouseEvent<SVGSVGElement | HTMLElement>) => {
      e.stopPropagation();
      if (prefixAction) {
         prefixAction();
      }
   };

   const handleMiddleAction = (e: MouseEvent<SVGSVGElement | HTMLElement>) => {
      e.stopPropagation();
      if (middleAction) {
         middleAction();
      }
   };

   const handleAffixAction = (e: MouseEvent<SVGSVGElement | HTMLElement>) => {
      e.stopPropagation();
      if (affixAction) {
         affixAction();
      }
   };

   const handleShowChildren = (e: MouseEvent<SVGSVGElement | HTMLElement>) => {
      e.stopPropagation();
      if (setShowChildren) {
         setShowChildren(!showChildren);
      }
   };

   return (
      <StyledListItemButton
         hover={handleClick !== undefined}
         disableRipple
         alignItems='center'
         divider
         onClick={handleMainClick}
      >
         {PrefixIcon ? (
            <ListItemIcon onClick={handlePrefixAction}>
               {PrefixIcon}
            </ListItemIcon>
         ) : (
            <></>
         )}
         <ListItemText
            primaryTypographyProps={{ fontSize: isChild ? '14px' : '16px' }}
            secondaryTypographyProps={{ fontSize: '12px' }}
            inset={isChild}
            primary={title}
            secondary={secondary}
         />
         {hasChildren ? (
            <IconButton
               onClick={handleShowChildren}
               sx={{ marginRight: '4em' }}
            >
               {arrowIcon}
            </IconButton>
         ) : (
            <></>
         )}
         {MiddleIcon !== undefined && MiddleIcon !== null ? (
            <IconButton
               onClick={handleMiddleAction}
               sx={{ marginRight: '4em' }}
            >
               {MiddleIcon}
            </IconButton>
         ) : (
            <></>
         )}
         {AffixIcon !== undefined && AffixIcon !== null ? (
            <IconButton onClick={handleAffixAction}>{AffixIcon}</IconButton>
         ) : (
            <></>
         )}
      </StyledListItemButton>
   );
}
