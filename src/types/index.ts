import { Tabs } from 'webextension-polyfill';

type DOMMessage = {
   type: 'GET_DOM';
};

type DOMMessageResponse = {
   title: string;
   headlines: string[];
};

interface RouteType {
   element: () => React.ReactElement;
   path: string;
   label: string;
}

interface TabGroup {
   [key: number]: Tabs.Tab[];
}

interface StorageGroup extends chrome.tabGroups.TabGroup {
   tabs: chrome.tabs.Tab[];
}

interface GroupInfoType {
   collapsed: boolean;
   color: string;
   id: number;
   title: string;
   windowId: number;
}

type ColorEnum =
   | 'grey'
   | 'blue'
   | 'red'
   | 'yellow'
   | 'green'
   | 'pink'
   | 'purple'
   | 'cyan'
   | 'orange';

export {
   ColorEnum,
   DOMMessage,
   DOMMessageResponse,
   GroupInfoType,
   RouteType,
   StorageGroup,
   TabGroup,
};
