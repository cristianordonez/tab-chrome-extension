import React, { useEffect, useState } from 'react';
import { Tabs, tabs } from 'webextension-polyfill';

export default function CurrentWorkspace() {
   const [currentTabs, setCurrentTabs] = useState<Tabs.Tab[]>([]);

   useEffect(() => {
      const getTabs = async () => {
         const currentTabs = await tabs.query({});
         setCurrentTabs(currentTabs);
      };
      getTabs();
   }, []);

   console.log('currentTabs: ', currentTabs);
   return <>{/* <List /> */}</>;
}
