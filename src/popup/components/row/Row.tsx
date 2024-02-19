import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItemText } from '@mui/material';
import React, { MouseEvent } from 'react';
import { RowProps } from '../../../types';
import { usePopupStatus } from '../../provider/PopupStatusProvider';
import RowItemWrapper from './RowItemWrapper';
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
   title,
   hasChildren = false,
   isChild = false,
   secondary = '',
   showChildren = false,
   enableMiddleIconHover = true,
   enableAffixIconHover = true,
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
         divider
         onClick={makeClickHandler(() => {
            if (handleClick) handleClick();
         })}
      >
         {PrefixIcon ? (
            <RowItemWrapper
               hover={false}
               handleClick={
                  prefixAction
                     ? makeClickHandler(() => prefixAction())
                     : undefined
               }
            >
               {PrefixIcon}
            </RowItemWrapper>
         ) : (
            <></>
         )}
         {title ? (
            <ListItemText
               primaryTypographyProps={{ fontSize: isChild ? '14px' : '16px' }}
               secondaryTypographyProps={{ fontSize: '12px' }}
               inset={isChild}
               primary={title}
               secondary={secondary}
            />
         ) : (
            <></>
         )}
         {hasChildren ? (
            <RowItemWrapper
               hover
               handleClick={
                  setShowChildren
                     ? makeClickHandler(() => setShowChildren(!showChildren))
                     : undefined
               }
               marginRight
            >
               {arrowIcon}
            </RowItemWrapper>
         ) : (
            <></>
         )}
         {FullScreenIcon !== undefined &&
         FullScreenIcon !== null &&
         !isPopup ? (
            <RowItemWrapper
               hover={enableFullScreenIconHover}
               handleClick={
                  fullScreenAction
                     ? makeClickHandler(() => fullScreenAction())
                     : undefined
               }
               marginRight
            >
               {FullScreenIcon}
            </RowItemWrapper>
         ) : (
            <></>
         )}
         {MiddleIcon !== undefined && MiddleIcon !== null ? (
            <RowItemWrapper
               hover={enableMiddleIconHover}
               handleClick={
                  middleAction
                     ? makeClickHandler(() => {
                          middleAction();
                       })
                     : undefined
               }
               marginRight
            >
               {MiddleIcon}
            </RowItemWrapper>
         ) : (
            <></>
         )}
         {AffixIcon !== undefined && AffixIcon !== null ? (
            <RowItemWrapper
               hover={enableAffixIconHover}
               handleClick={
                  affixAction
                     ? makeClickHandler(() => {
                          affixAction();
                       })
                     : undefined
               }
            >
               {AffixIcon}
            </RowItemWrapper>
         ) : (
            <></>
         )}
      </StyledListItemButton>
   );
}
