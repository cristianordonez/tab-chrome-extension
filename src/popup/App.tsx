import React, { useEffect, useState } from 'react';
import { FaExpandAlt } from 'react-icons/fa';
import { Tabs, tabs } from 'webextension-polyfill';
import { TabButton } from './components/TabButton';
import { TabGroup } from './components/TabGroup';

export const ColorModeContext = React.createContext({
   //eslint-disable-next-line
   toggleColorMode: () => {},
});

export const App = () => {
   const [currentTabs, setCurrentTabs] = useState<Tabs.Tab[]>([]);
   const [activeTab, setActiveTab] = useState<number>(0);

   useEffect(() => {
      getTabs().then((res) => {
         setCurrentTabs(res);
      });
   }, []);

   async function getTabs() {
      const currentTabs = await tabs.query({});
      return currentTabs;
   }

   const tabItems = ['Current Workspace', 'Saved Workspaces'];

   return (
      <>
         {/* <Routes></Routes> */}
         <FaExpandAlt onClick={() => tabs.create({ url: 'popup.html' })} />
         <TabGroup direction={'row'}>
            {tabItems.map((tab, index) => (
               <TabButton
                  activeIndex={activeTab}
                  label={tab}
                  index={index}
                  handleClick={setActiveTab}
               />
            ))}
         </TabGroup>
         {currentTabs.map((tab) => (
            <h1>{tab.url}</h1>
         ))}
      </>
   );
};
