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
   PrefixIcon?: React.ReactElement;
   AffixIcon?: React.ReactElement;
   MiddleIcon?: React.ReactElement;
   setShowChildren?: Dispatch<SetStateAction<boolean>>;
   title: string;
   hasChildren?: boolean;
   isChild?: boolean;
   secondary?: string;
   showChildren?: boolean;
   handleClick?: (e: MouseEvent<SVGSVGElement | HTMLElement>) => void;
   hover?: boolean;
}

export default function Row({
   PrefixIcon,
   AffixIcon,
   MiddleIcon,
   setShowChildren,
   handleClick,
   title = '',
   hasChildren = false,
   isChild = false,
   secondary = '',
   showChildren = false,
   hover,
}: Props) {
   const arrowIcon = showChildren ? (
      <ExpandMoreIcon fontSize='large' />
   ) : (
      <ChevronRightIcon fontSize='large' />
   );

   const handleShowChildren = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (setShowChildren) {
         setShowChildren(!showChildren);
      }
   };

   return (
      <StyledListItemButton
         hover={hover}
         alignItems='center'
         divider
         onClick={handleClick}
      >
         {PrefixIcon !== undefined && PrefixIcon !== null ? (
            <ListItemIcon>{PrefixIcon}</ListItemIcon>
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
            <IconButton sx={{ marginRight: '4em' }}>{MiddleIcon}</IconButton>
         ) : (
            <></>
         )}
         {AffixIcon !== undefined && AffixIcon !== null ? (
            <IconButton>{AffixIcon}</IconButton>
         ) : (
            <></>
         )}
      </StyledListItemButton>
   );
}
