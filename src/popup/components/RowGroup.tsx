import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, Collapse, List, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { ColorEnum, LocalStorageTab } from '../../types';
import { faviconURL } from '../../utils/constructFaviconUrl';
import Circle from './Circle';
import Row from './Row';

interface Props {
   MainRowBtn: React.ReactElement;
   tabs?: chrome.tabs.Tab[] | LocalStorageTab[];
   groupId?: number;
   title?: string;
   color?: ColorEnum;
   secondary?: string;
}

export default function RowGroup({
   MainRowBtn,
   tabs = [],
   groupId = 0,
   title = '',
   color = 'grey',
   secondary = '',
}: Props) {
   const [showTabs, setShowTabs] = useState<boolean>(false);

   const handleCloseTab = () => {};

   const handleCreate = () => {
      console.log('HERE IN HANDLE CREATE');
   };
   return (
      <List>
         <Row
            hasChildren={true}
            PrefixIcon={<Circle color={color} />}
            title={title}
            secondary={secondary}
            showChildren={showTabs}
            setShowChildren={setShowTabs}
            AffixIcon={MainRowBtn}
            handleClick={handleCreate}
         />
         <Collapse in={showTabs} timeout={'auto'} unmountOnExit>
            <List component='div' disablePadding>
               <>
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
                  />
               </>
            </List>
         </Collapse>
      </List>
   );
}
