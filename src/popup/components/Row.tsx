import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItemIcon, ListItemText } from '@mui/material';
import React, { Dispatch, MouseEvent, SetStateAction } from 'react';
import StyledIconButton from './StyledIconButton';
import StyledListItemButton from './StyledListItemButton';

interface Props {
   /**
    * unique id for given row
    */
   id: string | number;
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
   /**
    * Enable or disable hover effect of middle icon
    */
   enableMiddleIconHover?: boolean;
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
   enableMiddleIconHover = true,
}: Props) {
   const arrowIcon = showChildren ? (
      <ExpandMoreIcon fontSize='large' />
   ) : (
      <ChevronRightIcon fontSize='large' />
   );

   const makeClickHandler =
      (callback: () => void) =>
      (e: MouseEvent<SVGSVGElement | HTMLElement>) => {
         e.stopPropagation();
         callback();
      };

   return (
      <StyledListItemButton
         hover={handleClick !== undefined}
         disableRipple
         alignItems='center'
         divider
         onClick={makeClickHandler(() => {
            if (handleClick) handleClick();
         })}
      >
         {PrefixIcon ? (
            <ListItemIcon
               onClick={makeClickHandler(() => {
                  if (prefixAction) prefixAction();
               })}
            >
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
            <StyledIconButton
               hover
               onClick={makeClickHandler(() => {
                  if (setShowChildren) setShowChildren(!showChildren);
               })}
               sx={{ marginRight: '4em' }}
            >
               {arrowIcon}
            </StyledIconButton>
         ) : (
            <></>
         )}
         {MiddleIcon !== undefined && MiddleIcon !== null ? (
            <StyledIconButton
               hover={enableMiddleIconHover}
               onClick={makeClickHandler(() => {
                  if (middleAction) middleAction();
               })}
               sx={{ marginRight: '4em' }}
            >
               {MiddleIcon}
            </StyledIconButton>
         ) : (
            <></>
         )}
         {AffixIcon !== undefined && AffixIcon !== null ? (
            <StyledIconButton
               hover
               onClick={makeClickHandler(() => {
                  if (affixAction) affixAction();
               })}
            >
               {AffixIcon}
            </StyledIconButton>
         ) : (
            <></>
         )}
      </StyledListItemButton>
   );
}
