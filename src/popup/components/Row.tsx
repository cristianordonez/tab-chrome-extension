import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, ListItemIcon, ListItemText } from '@mui/material';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import { styled } from '@mui/system';
import React, { Dispatch, SetStateAction } from 'react';

const StyledListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
   backgroundColor: theme.palette.background.paper,
   alignItems: 'center',
   justifyContent: 'flex-start',
   height: '100%',
}));

interface Props {
   PrefixIcon?: React.ReactElement;
   AffixIcon?: React.ReactElement;
   title: string;
   isParent?: boolean;
   label?: string;
   showChildren?: boolean;
   setShowChildren?: Dispatch<SetStateAction<boolean>>;
   groupId: number;
}

export default function Row({
   PrefixIcon,
   AffixIcon,
   title = '',
   isParent = false,
   label = '',
   showChildren,
   setShowChildren,
   groupId,
}: Props) {
   const arrowIcon = showChildren ? (
      <ExpandMoreIcon fontSize='large' />
   ) : (
      <ChevronRightIcon fontSize='large' />
   );

   const handleShowChildren = () => {
      if (setShowChildren) {
         setShowChildren(!showChildren);
      }
   };

   return (
      <StyledListItem
         alignItems='center'
         divider
         secondaryAction={
            <IconButton>
               {AffixIcon !== undefined && AffixIcon !== null ? (
                  AffixIcon
               ) : (
                  <></>
               )}
            </IconButton>
         }
      >
         {PrefixIcon !== undefined && PrefixIcon !== null ? (
            <ListItemIcon>{PrefixIcon}</ListItemIcon>
         ) : (
            <></>
         )}
         <ListItemText
            primaryTypographyProps={{ fontSize: isParent ? '16px' : '14px' }}
            secondaryTypographyProps={{ fontSize: '12px' }}
            inset={!isParent}
            primary={title}
            secondary={label}
         />
         {isParent ? (
            <IconButton
               onClick={handleShowChildren}
               sx={{ marginRight: '4em' }}
            >
               {arrowIcon}
            </IconButton>
         ) : (
            <></>
         )}
      </StyledListItem>
   );
}
