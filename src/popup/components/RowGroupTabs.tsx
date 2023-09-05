import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import React from 'react';
import { LocalStorageTab } from '../../types';
import { faviconURL } from '../../utils/constructFaviconUrl';
import Row from './Row';
import RowGroupParent from './RowGroupParent';

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
    *Button element that will be shown in midle of main parent row
    */
   ChildAffixButton: React.ReactElement;
   /**
    *Button element that will be shown at the end of each child row
    */
   tabs?: chrome.tabs.Tab[] | LocalStorageTab[];
   /**
    *list of tabs that will be displayed for each group
    */
   groupId?: number;
   /**
    *groupId of current row group
    */
   title?: string;
   /**
    *main text that will shown in parent row
    */
   secondary?: string;
   /**
    *secondary text that will be shown in parent row
    */
   handleCreateTab: (groupId: number) => void;
   /**
    *function used for final row
    */
}

export default function RowGroupTabs({
   ParentAffixButton,
   ParentPrefixButton,
   ParentMiddleButton,
   ChildAffixButton,
   tabs = [],
   groupId = 0,
   title = '',
   secondary = '',
   handleCreateTab,
}: Props) {
   return (
      <RowGroupParent
         ParentPrefixButton={ParentPrefixButton}
         ParentAffixButton={ParentAffixButton}
         ParentMiddleButton={ParentMiddleButton}
         title={title}
         secondary={secondary}
         handleParentClick={() => {}}
      >
         {tabs.map((tab) => (
            <Row
               key={groupId}
               isChild={true}
               PrefixIcon={
                  <Box
                     component='img'
                     sx={{ height: '35%', width: '35%' }}
                     alt={`Favicon for ${tab.title}`}
                     src={faviconURL(tab.url || '')}
                  />
               }
               title={tab.title || ''}
               AffixIcon={ChildAffixButton}
            />
         ))}
         <Row
            PrefixIcon={<AddIcon fontSize='small' />}
            title='Create new tab'
            isChild={true}
            handleClick={() => handleCreateTab(groupId)}
         />
      </RowGroupParent>
   );
}
