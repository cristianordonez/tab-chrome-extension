import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, ListItemIcon, ListItemText } from '@mui/material';
import ListItemButton, {
   ListItemButtonProps,
} from '@mui/material/ListItemButton';
import { styled } from '@mui/system';
import React, { Dispatch, SetStateAction } from 'react';

const StyledListItem = styled(ListItemButton)<ListItemButtonProps>(
   ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100%',
   })
);

interface Props {
   PrefixIcon?: React.ReactElement;
   AffixIcon?: React.ReactElement;
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
   AffixIcon,
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

   const handleShowChildren = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (setShowChildren) {
         setShowChildren(!showChildren);
      }
   };

   return (
      <StyledListItem alignItems='center' divider onClick={handleClick}>
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
         {AffixIcon !== undefined && AffixIcon !== null ? (
            <IconButton>{AffixIcon}</IconButton>
         ) : (
            <></>
         )}
      </StyledListItem>
   );
}
