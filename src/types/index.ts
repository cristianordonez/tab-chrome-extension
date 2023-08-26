interface RouteType {
   element: () => React.ReactElement;
   path: string;
   label: string;
}

interface ChromeTabs {
   [key: number]: chrome.tabs.Tab[];
}

interface LocalStorageTabGroups {
   [key: number]: LocalStorageTabGroup;
}

interface LocalStorageTabGroup {
   id: number;
   color: ColorEnum;
   tabs: LocalStorageTab[];
   title: string;
   createdAt: number;
}

interface LocalStorageTab {
   tabId: number;
   url: string;
   title: string;
   favIconUrl: string;
}

interface LocalStorageTitles {
   [key: string]: number[];
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
   ChromeTabs,
   ColorEnum,
   LocalStorageTab,
   LocalStorageTabGroup,
   LocalStorageTabGroups,
   LocalStorageTitles,
   RouteType,
};
