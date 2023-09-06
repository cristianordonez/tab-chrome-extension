import { AlertColor } from '@mui/material';

// data structure to store route objects
interface RouteType {
   element: () => React.ReactElement;
   path: string;
   label: string;
}

// color of tab groups
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

// interface for saved titles in local storage
interface LocalStorageTitles {
   [key: string]: number[];
}

// shared keys between tab groups
interface SharedTabGroup {
   id: number;
   color: ColorEnum;
   title: string;
   createdAt: number;
}

// single tab in saved tab groups array
interface LocalStorageTab {
   id: number;
   url: string;
   title: string;
}

// SAVED TAB GROUPS
// single tab group saved in local storage
interface LocalStorageTabGroup extends SharedTabGroup {
   tabs: LocalStorageTab[];
}

interface LocalStorageTabGroups {
   [key: number]: LocalStorageTabGroup;
}

interface AlertSettings {
   isOpen: boolean;
   alertSeverity: AlertColor;
   alertMessage: string;
}

export {
   AlertSettings,
   ColorEnum,
   LocalStorageTab,
   LocalStorageTabGroup,
   LocalStorageTabGroups,
   LocalStorageTitles,
   RouteType,
};
