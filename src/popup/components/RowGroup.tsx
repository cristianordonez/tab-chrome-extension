import React, { useEffect, useState } from 'react';
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

   const circle = <Circle color='red' />;

   const action = () => {};

   useEffect(() => {
      const getCurrentGroup = async () => {
         const info = await TabGroupUtil.getTabGroupInfo(groupId, windowId);
         setGroupInfo(info);
      };
      getCurrentGroup();
   }, [groupId, windowId]);

   if (!groupInfo) {
      return <></>;
   } else {
      return (
         <>
            <Row
               isParent={true}
               PrefixIcon={<Circle color={groupInfo.color} />}
               title={groupInfo.title || ''}
               label={`${tabs.length} tab${tabs.length > 1 ? 's' : ''}`}
               action={action}
               showChildren={showTabs}
               setShowChildren={setShowTabs}
            />
            {showTabs ? (
               tabs.map((tab) => (
                  <Row
                     isParent={false}
                     title={tab.title || ''}
                     action={action}
                  />
               ))
            ) : (
               <></>
            )}
         </>
      );
   }
}
