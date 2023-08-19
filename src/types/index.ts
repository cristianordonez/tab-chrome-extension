interface RouteType {
   element: () => React.ReactElement;
   path: string;
   label: string;
}

interface AllTabsType {
   [key: number]: chrome.tabs.Tab[];
}

type StorageGroup = {
   [key: number]: StorageGroupValue;
};

interface StorageGroupValue {
   id: number;
   color: ColorEnum;
   tabs: StorageTab;
   title: string;
}

type StorageTab = {
   [key: number]: StorageTabValue;
};
interface StorageTabValue {
   tabId: number;
   url: string;
   title: string;
   favIconUrl: string;
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
   AllTabsType,
   ColorEnum,
   RouteType,
   StorageGroup,
   StorageGroupValue,
   StorageTab,
   StorageTabValue,
};
