export type DOMMessage = {
   type: 'GET_DOM';
};

export type DOMMessageResponse = {
   title: string;
   headlines: string[];
};

// export type TabType = {
//    active: boolean;
//    audible: boolean;
//    autoDiscardable: boolean;
//    discarded: boolean;
//    favIconUrl: string;
//    groupId: number;
//    height: number;
//    highlighted: boolean;
//    id: number;
//    incognito: boolean;
//    index: number;
//    mutedInfo: { muted: boolean };
//    pinned: boolean;
//    selected: boolean;
//    status: string;
//    title: string;
//    url: string;
//    width: number;
//    windowId: number;
// };

export interface RouteType {
   element: () => React.ReactElement;
   path: string;
   label: string;
}
