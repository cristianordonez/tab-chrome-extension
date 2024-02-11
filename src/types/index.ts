import { AlertColor } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { RouteObject } from 'react-router-dom';
import FormattedTab from '../utils/FormattedTab';

const colors = [
   'grey',
   'blue',
   'red',
   'yellow',
   'green',
   'pink',
   'purple',
   'cyan',
   'orange',
] as const;

// color of tab groups
type ColorEnum = (typeof colors)[number];

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
   [key: number | string]: LocalStorageTabGroup;
}

interface AlertSettings {
   isOpen: boolean;
   alertSeverity: AlertColor;
   alertMessage: string;
}

interface FormattedTabs {
   [key: number | string]: FormattedTab;
}

type urlRule = 'any' | 'hostname' | 'path' | 'query';
type matchRule = 'contains' | 'is equal to' | 'ends with' | 'starts with';
type actionRule = 0 | 1 | 2;

interface ConditionValues {
   url: urlRule;
   match: matchRule;
   query: string;
}

interface Condition extends ConditionValues {
   id: string;
}

interface RuleType {
   title: string;
   action: actionRule;
   conditions?: Condition[];
   id?: string;
   groupName: string | undefined;
   groupColor: ColorEnum | undefined;
   active: boolean;
}

interface UpdateRuleType {
   title?: string;
   action?: actionRule;
   conditions?: Condition[];
   groupName?: string;
   groupColor?: ColorEnum;
   active?: boolean;
}

interface LocalStorageRules {
   [key: string]: RuleType;
}

interface TabOptions {
   url?: string | undefined;
   pinned?: boolean;
}

type SetAlertSettingsType = (
   alertSeverity?: AlertColor,
   alertMessage?: string
) => void;

interface RowProps {
   /**
    * unique id for given row
    */
   id?: string | number;
   /**
    * Optional icon to use at beginning (left) of row
    */
   PrefixIcon?: React.ReactElement;
   /**
    * function that will be called on PrefixIcon click
    */
   prefixAction?: () => void;
   /**
    * Optional icon to use at end (right) of row
    */
   AffixIcon?: React.ReactElement;
   /**
    * function that will be called on AffixIcon click
    */
   affixAction?: () => void;
   /**
    * Optional icon to use in middle of row
    */
   MiddleIcon?: React.ReactElement;
   /**
    * function that will be called on MiddleIcon click
    */
   middleAction?: () => void;
   /**
    * Optional icon to use only when extension is open in separate tab
    */
   FullScreenIcon?: React.ReactElement;
   /**
    * function that will be called on FullScreenIcon click
    */
   fullScreenAction?: () => void;
   /**
    * React dispatch action to change state of whether children should be shown
    */
   setShowChildren?: Dispatch<SetStateAction<boolean>>;
   /**
    * Main action to perform when entire row is clicked
    */
   handleClick?: () => void;
   /**
    * Title of row
    */
   title?: string;
   /**
    * true if current row has associated sub rows (is parent row). Defaults to false.
    */
   hasChildren?: boolean;
   /**
    * true if current row is a child of a parent row. Defaults to false.
    */
   isChild?: boolean;
   /**
    * Secondary text to show on row.
    */
   secondary?: string;
   /**
    * Whether children are currently being shown on UI. Defaults to false.
    */
   showChildren?: boolean;
   /**
    * Enable or disable hover effect of middle icon
    */
   enableMiddleIconHover?: boolean;
   /**
    * Enable or disable hover effect of full screen icon
    */
   enableFullScreenIconHover?: boolean;
}

type RouteType = RouteObject & {
   label?: string | undefined;
};

/**
 * Inputs for form to add new rules
 */

export {
   AlertSettings,
   ColorEnum,
   Condition,
   ConditionValues,
   FormattedTabs,
   LocalStorageRules,
   LocalStorageTab,
   LocalStorageTabGroup,
   LocalStorageTabGroups,
   LocalStorageTitles,
   RouteType,
   RowProps,
   RuleType,
   SetAlertSettingsType,
   TabOptions,
   UpdateRuleType,
   actionRule,
   colors,
   matchRule,
   urlRule,
};
