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
   /**
    * unique id for given row
    */
   id?: number;
   /**
    * Optional icon to use at beginning (left) of row
    */
   PrefixIcon?: React.ReactElement;
   /**
    * function that will be called on PrefixIcon click
    */
   prefixAction?: () => void;
   /**
    * Optional icon to use at end (right) of row
    */
   AffixIcon?: React.ReactElement;
   /**
    * function that will be called on AffixIcon click
    */
   affixAction?: () => void;
   /**
    * Optional icon to use in middle of row
    */
   MiddleIcon?: React.ReactElement;
   /**
    * function that will be called on MiddleIcon click
    */
   middleAction?: () => void;
   /**
    * React dispatch action to change state of whether children should be shown
    */
   setShowChildren?: Dispatch<SetStateAction<boolean>>;
   /**
    * Main action to perform when entire row is clicked
    */
   handleClick?: () => void;
   /**
    * Title of row
    */
   title: string;
   /**
    * true if current row has associated sub rows (is parent row). Defaults to false.
    */
   hasChildren?: boolean;
   /**
    * true if current row is a child of a parent row. Defaults to false.
    */
   isChild?: boolean;
   /**
    * Secondary text to show on row.
    */
   secondary?: string;
   /**
    * Whether children are currently being shown on UI. Defaults to false.
    */
   showChildren?: boolean;
}

/**
 * Single row on UI
 */
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

   const makeClickHandler = (
      e: MouseEvent<SVGSVGElement | HTMLElement>,
      callback: () => void
   ) => {
      console.log('e: ', e);
      console.log('');
      e.stopPropagation();
      callback();
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
            <ListItemIcon
               onClick={(e) =>
                  makeClickHandler(e, () => {
                     if (prefixAction) prefixAction();
                  })
               }
            >
               {/* <ListItemIcon onClick={handlePrefixAction}> */}
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
