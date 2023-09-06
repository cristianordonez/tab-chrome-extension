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
   /**
    *children of current component, must be a single ReactNode component
    */
   handleParentClick: () => void;
   /**
    *function called when main parent row is clicked
    */
   hover?: boolean;
   /**
    *whether or not parent row should include hover
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
   hover,
}: Props) {
   const [showTabs, setShowTabs] = useState<boolean>(false);

   return (
      <List>
         <Row
            hover={hover}
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
