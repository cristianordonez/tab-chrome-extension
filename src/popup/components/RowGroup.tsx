import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, Tooltip } from '@mui/material';
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
   handleParentClick: () => void;
   /**
    *function called when main parent row is clicked
    */
   tabs: LocalStorageTab[] | chrome.tabs.Tab[];
   /**
    *list of tabs either from API or from local storage
    */
   groupId: number;
   /**
    *id of current tab group
    */
   handleCloseTab: () => void;
   /**
    *id of current tab group
    */
   handleCreateTab: () => void;
   /**
    *id of current tab group
    */
}

export default function RowGroup({
   ParentPrefixButton,
   ParentMiddleButton,
   ParentAffixButton,
   title,
   secondary,
   handleParentClick,
   tabs,
   groupId,
   handleCloseTab,
   handleCreateTab,
}: Props) {
   return (
      <RowGroupParent
         ParentPrefixButton={ParentPrefixButton}
         ParentMiddleButton={ParentMiddleButton}
         ParentAffixButton={ParentAffixButton}
         title={title}
         secondary={secondary}
         handleParentClick={handleParentClick}
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
               AffixIcon={
                  <Tooltip title='Close tab'>
                     <RemoveCircleIcon
                        fontSize='small'
                        onClick={handleCloseTab}
                     />
                  </Tooltip>
               }
            />
         ))}
         <Row
            PrefixIcon={<AddIcon fontSize='small' />}
            title='Create new tab'
            isChild={true}
            handleClick={handleCreateTab}
         />
      </RowGroupParent>
   );
}
