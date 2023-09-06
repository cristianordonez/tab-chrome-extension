import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, Tooltip } from '@mui/material';
import React, { MouseEvent } from 'react';
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
   handleParentClick?: () => void;
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
   handleCloseTab: (
      e: MouseEvent<HTMLElement | SVGSVGElement>,
      tabId: number
   ) => Promise<void>;
   /**
    * deletes or closes tab from current group
    */
   handleCreateTab?: (
      e: MouseEvent<HTMLElement | SVGSVGElement>
   ) => Promise<void>;
   /**
    * opens or saves new tab to group
    */
   handleTabClick?: (
      e: MouseEvent<SVGSVGElement | HTMLElement>,
      url: string | undefined
   ) => void;
   /**
    * handles main row child click
    */
}

export default function TabGroup({
   groupId,
   ParentPrefixButton,
   ParentMiddleButton,
   ParentAffixButton,
   title,
   secondary,
   handleParentClick,
   tabs,
   handleCloseTab,
   handleCreateTab,
   handleTabClick,
}: Props) {
   return (
      <RowGroupParent
         groupId={groupId}
         ParentPrefixButton={ParentPrefixButton}
         ParentMiddleButton={ParentMiddleButton}
         ParentAffixButton={ParentAffixButton}
         title={title}
         secondary={secondary}
         handleParentClick={handleParentClick}
      >
         {tabs.map((tab) => (
            <Row
               key={tab.id}
               id={tab.id}
               isChild={true}
               handleClick={
                  handleTabClick !== undefined
                     ? (e) => handleTabClick(e, tab.url)
                     : undefined
               }
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
                        onClick={(e) => {
                           if (tab.id) {
                              handleCloseTab(e, tab.id);
                           }
                        }}
                     />
                  </Tooltip>
               }
            />
         ))}
         {handleCreateTab ? (
            <Row
               id={groupId}
               PrefixIcon={<AddIcon fontSize='small' />}
               title='Create new tab'
               isChild={true}
               handleClick={handleCreateTab}
            />
         ) : (
            <></>
         )}
      </RowGroupParent>
   );
}
