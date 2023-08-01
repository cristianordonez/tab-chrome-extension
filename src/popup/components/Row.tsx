import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton, ListItemIcon, ListItemText } from '@mui/material';
import ListItem, { ListItemProps } from '@mui/material/ListItem';
import { styled } from '@mui/system';
import React, { Dispatch, SetStateAction } from 'react';

const StyledListItem = styled(ListItem)<ListItemProps>(({ theme }) => ({
   backgroundColor: theme.palette.background.paper,
   alignItems: 'center',
   justifyContent: 'flex-start',
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
      <>
         <StyledListItem
            alignItems='center'
            secondaryAction={
               <IconButton>
                  {isParent ? <DeleteIcon /> : <RemoveCircleIcon />}
               </IconButton>
            }
         >
            {isParent == true &&
            PrefixIcon !== undefined &&
            PrefixIcon !== null ? (
               <ListItemIcon>{PrefixIcon}</ListItemIcon>
            ) : (
               <></>
            )}
            <ListItemText primary={title} secondary={label} />
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
      </>
   );
}
