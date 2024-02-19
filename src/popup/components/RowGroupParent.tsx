import { Collapse, List } from '@mui/material';
import React, { useState } from 'react';
import { RowProps } from '../../types';
import Row from './row/Row';

interface Props extends RowProps {
   /**
    *children of current component, must be a single ReactNode component
    */
   children: React.ReactNode;
}

/**
 * Parent row that contains subrows
 */
export default function RowGroupParent({
   prefixAction,
   PrefixIcon,
   MiddleIcon,
   middleAction,
   AffixIcon,
   affixAction,
   FullScreenIcon,
   fullScreenAction,
   title,
   secondary,
   children,
   handleClick,
   id,
   enableMiddleIconHover,
   enableFullScreenIconHover,
}: Props) {
   const [showTabs, setShowTabs] = useState<boolean>(false);

   return (
      <List>
         <Row
            id={id}
            hasChildren={true}
            PrefixIcon={PrefixIcon}
            prefixAction={prefixAction}
            middleAction={middleAction}
            affixAction={affixAction}
            FullScreenIcon={FullScreenIcon}
            fullScreenAction={fullScreenAction}
            title={title}
            secondary={secondary}
            showChildren={showTabs}
            setShowChildren={setShowTabs}
            AffixIcon={AffixIcon}
            handleClick={handleClick}
            MiddleIcon={MiddleIcon}
            enableMiddleIconHover={enableMiddleIconHover}
            enableFullScreenIconHover={enableFullScreenIconHover}
         />
         <Collapse in={showTabs} timeout={'auto'} unmountOnExit>
            <List component='div' disablePadding>
               {children}
            </List>
         </Collapse>
      </List>
   );
}
