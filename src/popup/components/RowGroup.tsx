import { Box, Collapse, List } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { faviconURL } from '../../utils/constructFaviconUrl';
import { TabGroupUtil } from '../../utils/tabGroupUtil';
import Circle from './Circle';
import Row from './Row';

interface Props {
   tabs: chrome.tabs.Tab[];
   groupId: number;
   windowId: number | undefined;
}

export default function RowGroup({ tabs, groupId, windowId }: Props) {
   const [showTabs, setShowTabs] = useState<boolean>(false);
   const [groupInfo, setGroupInfo] = useState<
      chrome.tabGroups.TabGroup | undefined
   >(undefined);

   const action = () => {};

   // todo
   // show favicon
   // change to save icon
   // add create new tab row
   // add highlight to inner row borders
   // add create new group button
   useEffect(() => {
      const getCurrentGroup = async () => {
         const info = await TabGroupUtil.getGroupFromAPI(groupId);
         setGroupInfo(info);
      };
      getCurrentGroup();
   }, [groupId, windowId]);
   console.log('tabs: ', tabs);

   if (!groupInfo) {
      return <></>;
   } else {
      return (
         <>
            <List>
               <Row
                  isParent={true}
                  PrefixIcon={<Circle color={groupInfo.color} />}
                  title={groupInfo.title || ''}
                  label={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
                  action={action}
                  showChildren={showTabs}
                  setShowChildren={setShowTabs}
               />
               {/* {showTabs ? ( */}
               <Collapse in={showTabs} timeout={'auto'} unmountOnExit>
                  <List component='div' disablePadding>
                     {tabs.map((tab) => (
                        <Row
                           isParent={false}
                           PrefixIcon={
                              <Box
                                 component='img'
                                 sx={{ height: '50%', width: '50%' }}
                                 alt={`Favicon for ${tab.title}`}
                                 src={faviconURL(tab.url || '')}
                                 // src={tab.favIconUrl}
                              />
                           }
                           action={action}
                           title={tab.title || ''}
                        />
                     ))}
                  </List>
                  {/* ) : (
                  <></>
               )} */}
               </Collapse>
            </List>
         </>
      );
   }
}
