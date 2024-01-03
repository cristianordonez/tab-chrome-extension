import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItemIcon, ListItemText } from '@mui/material';
import React, { MouseEvent } from 'react';
import { RowProps } from '../../types';
import { usePopupStatus } from '../provider/PopupStatusProvider';
import StyledIconButton from './StyledIconButton';
import StyledListItemButton from './StyledListItemButton';

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
   FullScreenIcon,
   fullScreenAction,
   setShowChildren,
   handleClick,
   title = '',
   hasChildren = false,
   isChild = false,
   secondary = '',
   showChildren = false,
   enableMiddleIconHover = true,
   enableFullScreenIconHover = true,
}: RowProps) {
   const isPopup = usePopupStatus();
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
         {FullScreenIcon !== undefined &&
         FullScreenIcon !== null &&
         !isPopup ? (
            <StyledIconButton
               hover={enableFullScreenIconHover}
               onClick={makeClickHandler(() => {
                  if (fullScreenAction) fullScreenAction();
               })}
               sx={{ marginRight: '4em' }}
            >
               {FullScreenIcon}
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
