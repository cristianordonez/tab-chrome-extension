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

interface TabType {
   // active: false;
   // audible: false;
   // autoDiscardable: true;
   // discarded: false;
   // favIconUrl: 'https://www.google.com/images/icons/product/chrome_web_store-32.png';
   // groupId: -1;
   // height: 2448;
   // highlighted: false;
   // id: 1016557520;
   // incognito: false;
   // index: 1;
   // mutedInfo: {
   //    muted: false;
   // }
   // pinned: false;
   // selected: false;
   // status: 'complete';
   // title: 'Chrome Web Store - Extensions';
   // url: 'https://chrome.google.com/webstore/category/extensions';
   // width: 1440;
   // windowId: 1016557519;
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
   TabGroup,
   TabType,
};
