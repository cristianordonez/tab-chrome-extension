import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, Collapse, List, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { ColorEnum, LocalStorageTab } from '../../types';
import { faviconURL } from '../../utils/constructFaviconUrl';
import Circle from './Circle';
import Row from './Row';

interface Props {
   tabs: chrome.tabs.Tab[] | LocalStorageTab[];
   groupId: number;
   title: string;
   color: ColorEnum;
   MainRowBtn: React.ReactElement;
}

export default function RowGroup({
   tabs,
   groupId,
   title,
   color,
   MainRowBtn,
}: Props) {
   const [showTabs, setShowTabs] = useState<boolean>(false);

   const action = () => {};

   return (
      <>
         <List>
            <Row
               groupId={groupId}
               isParent={true}
               PrefixIcon={<Circle color={color} />}
               title={title}
               label={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
               showChildren={showTabs}
               setShowChildren={setShowTabs}
               AffixIcon={MainRowBtn}
            />
            <Collapse in={showTabs} timeout={'auto'} unmountOnExit>
               <List component='div' disablePadding>
                  {tabs.map((tab) => (
                     <Row
                        isParent={false}
                        groupId={groupId}
                        PrefixIcon={
                           <Box
                              component='img'
                              sx={{ height: '50%', width: '50%' }}
                              alt={`Favicon for ${tab.title}`}
                              src={faviconURL(tab.url || '')}
                           />
                        }
                        title={tab.title || ''}
                        AffixIcon={
                           <Tooltip title='Close tab'>
                              <RemoveCircleIcon
                                 fontSize='small'
                                 onClick={action}
                              />
                           </Tooltip>
                        }
                     />
                  ))}
               </List>
            </Collapse>
         </List>
      </>
   );
}
