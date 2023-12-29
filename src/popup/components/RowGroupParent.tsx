import { Collapse, List } from '@mui/material';
import React, { useState } from 'react';
import Row from './Row';

interface Props {
   /**
    *Icon element that will be shown at beginning of main parent row
    */
   ParentPrefixIcon: React.ReactElement;
   /**
    *Action for prefix icon
    */
   parentPrefixAction?: () => void;
   /**
    *Icon element that will be shown in middle of main parent row
    */
   ParentMiddleIcon?: React.ReactElement;
   /**
    *Action for middle icon
    */
   parentMiddleAction?: () => void;
   /**
    *Icon element that will be shown at end of main parent row
    */
   ParentAffixIcon: React.ReactElement;
   /**
    *Action for affix icon
    */
   parentAffixAction?: () => void;
   /**
    *main text that will shown in parent row
    */
   title?: string;
   /**
    *secondary text that will be shown in parent row
    */
   secondary?: string;
   /**
    *children of current component, must be a single ReactNode component
    */
   children: React.ReactNode;
   /**
    *function called when main parent row is clicked
    */
   handleParentClick?: () => void;
   /**
    *id of current group
    */
   groupId: number;
}

/**
 * Parent row that contains subrows
 */
export default function RowGroupParent({
   parentPrefixAction,
   ParentPrefixIcon,
   ParentMiddleIcon,
   parentMiddleAction,
   ParentAffixIcon,
   parentAffixAction,
   title = '',
   secondary = '',
   children,
   handleParentClick,
   groupId,
}: Props) {
   const [showTabs, setShowTabs] = useState<boolean>(false);

   return (
      <List>
         <Row
            id={groupId}
            hasChildren={true}
            PrefixIcon={ParentPrefixIcon}
            prefixAction={parentPrefixAction}
            middleAction={parentMiddleAction}
            affixAction={parentAffixAction}
            title={title}
            secondary={secondary}
            showChildren={showTabs}
            setShowChildren={setShowTabs}
            AffixIcon={ParentAffixIcon}
            handleClick={handleParentClick}
            MiddleIcon={ParentMiddleIcon}
         />
         <Collapse in={showTabs} timeout={'auto'} unmountOnExit>
            <List component='div' disablePadding>
               {children}
            </List>
         </Collapse>
      </List>
   );
}
