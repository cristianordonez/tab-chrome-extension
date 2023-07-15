import React, { useEffect, useState } from 'react';
import { Tabs, tabs } from 'webextension-polyfill';
// import { getCurrentTab } from '../contentScript/DOMEvaluator';

export const App = () => {
   const [currentTabs, setCurrentTabs] = useState<Tabs.Tab[]>([])

   useEffect(() => { 
      getTabs().then(res => {
         setCurrentTabs(res)
      })
      
   }, [])

   async function getTabs() {
      const currentTabs = await tabs.query({
      });
      return currentTabs
   }

   return (
      <>
         {/* <Routes></Routes> */}
         <div>
            {currentTabs.map(tab => <h1>{tab.url}</h1>)}
         </div>
      </>
   );
};
