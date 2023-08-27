import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SaveIcon from '@mui/icons-material/Save';
import { IconButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
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
   title: string;
   isParent?: boolean;
   label?: string;
   action: () => void;
   showChildren?: boolean;
   setShowChildren?: Dispatch<SetStateAction<boolean>>;
}

export default function Row({
   PrefixIcon,
   title = '',
   isParent = false,
   label = '',
   action,
   showChildren,
   setShowChildren,
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
               {isParent ? (
                  <Tooltip title='Save or update tab group'>
                     <SaveIcon fontSize='small' onClick={action} />
                  </Tooltip>
               ) : (
                  <Tooltip title='Close tab'>
                     <RemoveCircleIcon fontSize='small' onClick={action} />
                  </Tooltip>
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
