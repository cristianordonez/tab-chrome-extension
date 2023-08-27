import { Box, Collapse, List } from '@mui/material';
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
}

export default function RowGroup({ tabs, groupId, title, color }: Props) {
   const [showTabs, setShowTabs] = useState<boolean>(false);
   // //const [groupInfo, setGroupInfo] = useState<
   // //   chrome.tabGroups.TabGroup | undefined
   // //>(undefined);

   const action = () => {};

   // todo
   // change to save icon
   // add create new tab row
   // add highlight to inner row borders
   // add create new group button
   // //useEffect(() => {
   // //   const getCurrentGroup = async () => {
   // //      const info = await TabGroupUtil.getGroupFromAPI(groupId);
   // //      setGroupInfo(info);
   // //   };
   // //   getCurrentGroup();
   // //}, [groupId]);
   // //console.log('tabs: ', tabs);

   // if (!groupInfo) {
   //    return <></>;
   // } else {
   return (
      <>
         <List>
            <Row
               groupId={groupId}
               isParent={true}
               PrefixIcon={<Circle color={color} />}
               title={title}
               label={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
               action={action}
               showChildren={showTabs}
               setShowChildren={setShowTabs}
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
                        action={action}
                        title={tab.title || ''}
                     />
                  ))}
               </List>
            </Collapse>
         </List>
      </>
   );
   //// }
}
