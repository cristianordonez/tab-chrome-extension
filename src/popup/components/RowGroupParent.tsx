// use this as parent to row group so that list can be used seperately
// will have 1 file called RowGroupTabs.tsx and another called RowGroupRules.tsx

import { Collapse, List } from '@mui/material';
import React, { useState } from 'react';
import Row from './Row';

interface Props {
   ParentPrefixButton: React.ReactElement;
   /**
    *Button element that will be shown at beginning of main parent row
    */
   ParentAffixButton: React.ReactElement;
   /**
    *Button element that will be shown at end of main parent row
    */
   ParentMiddleButton?: React.ReactElement;
   /**
    *Button element that will be shown in middle of main parent row
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
   handleParentClick: () => void;
   /**
    *function called when main parent row is clicked
    */
}

export default function RowGroupParent({
   ParentAffixButton,
   ParentPrefixButton,
   ParentMiddleButton,
   title = '',
   secondary = '',
   children,
   handleParentClick,
}: Props) {
   const [showTabs, setShowTabs] = useState<boolean>(false);

   return (
      <List>
         <Row
            hasChildren={true}
            PrefixIcon={ParentPrefixButton}
            title={title}
            secondary={secondary}
            showChildren={showTabs}
            setShowChildren={setShowTabs}
            AffixIcon={ParentAffixButton}
            handleClick={handleParentClick}
            MiddleIcon={ParentMiddleButton}
         />
         <Collapse in={showTabs} timeout={'auto'} unmountOnExit>
            <List component='div' disablePadding>
               {children}
            </List>
         </Collapse>
      </List>
   );
}
