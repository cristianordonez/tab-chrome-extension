import { Collapse, List } from '@mui/material';
import React, { useState } from 'react';
import Row from './Row';

interface Props {
   ParentPrefixIcon: React.ReactElement;
   /**
    *Icon element that will be shown at beginning of main parent row
    */
   parentPrefixAction?: () => void;
   /**
    *Action for prefix icon
    */
   ParentMiddleIcon?: React.ReactElement;
   /**
    *Icon element that will be shown in middle of main parent row
    */
   parentMiddleAction?: () => void;
   /**
    *Action for middle icon
    */
   ParentAffixIcon: React.ReactElement;
   /**
    *Icon element that will be shown at end of main parent row
    */
   parentAffixAction?: () => void;
   /**
    *Action for affix icon
    */
   title?: string;
   /**
    *main text that will shown in parent row
    */
   secondary?: string;
   /**
    *secondary text that will be shown in parent row
    */
   children: React.ReactNode;
   /**
    *children of current component, must be a single ReactNode component
    */
   handleParentClick?: () => void;
   /**
    *function called when main parent row is clicked
    */
   groupId: number;
   /**
    *id of current group
    */
}

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
