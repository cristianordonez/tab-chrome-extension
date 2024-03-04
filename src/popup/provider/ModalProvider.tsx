import React, {
   ChangeEvent,
   ReactNode,
   createContext,
   useContext,
   useEffect,
   useState,
} from 'react';
import { FormattedTabs } from '../../types';
import FormattedTab from '../../utils/FormattedTab';
import TabUtil from '../../utils/TabUtil';
import AddTabsModal from '../components/modal/AddTabsModal';
import ConfirmationModal from '../components/modal/ConfirmationModal';
import InputModal from '../components/modal/InputModal';

interface Props {
   children: ReactNode;
}

interface ModalInputs {
   body?: string;
   title: string;
   type: 'input' | 'confirmation' | 'tabs';
}

interface ModalConfig extends ModalInputs {
   actionCallback?: (output: boolean | string | null) => void;
}

const defaultModalConfig = {
   title: '',
   type: 'input' as const,
};

type ShowModal = ({ actionCallback, title, body }: ModalConfig) => void;

interface ContextType {
   showModal: ShowModal | null;
}

const defaultContext = {
   showModal: null,
};

const ModalContext = createContext<ContextType>(defaultContext);

export default function ModalProvider({ children }: Props) {
   const [open, setOpen] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>('');
   const [modalConfig, setModalConfig] =
      useState<ModalConfig>(defaultModalConfig);
   const [tabs, setTabs] = useState<FormattedTabs>({});

   /**
    * Updates tabs state with object of formatted active tabs (contain isChecked key)
    * Necessary for when type is set to tabs
    */
   const findTabs = async () => {
      const tabs = await TabUtil.getAll();
      const formattedTabs = TabUtil.formatTabs(tabs);
      setTabs(formattedTabs);
   };

   /**
    * Runs findTabs only when modalConfig.type was set to "tabs"
    */
   useEffect(() => {
      if (modalConfig.type == 'tabs') {
         findTabs();
      }
   }, [modalConfig]);

   /**
    * Context value returned that updates state and opens modal
    * @param param0 object containing actionCallback, title, body and type keys
    */
   const showModal = ({ actionCallback, title, body, type }: ModalConfig) => {
      setInputValue('');
      setModalConfig({ actionCallback, title, body, type });
      setOpen(!open);
   };

   /**
    * Called when user clicks on Okay button when dialog is of type 'input'
    * @param e react change event
    */
   const handleSubmitInput = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      const action = modalConfig.actionCallback;
      if (action !== undefined) {
         action(inputValue);
      }
      setOpen(!open);
   };

   /**
    * Called when user clicks on cancel button
    * Used for all modals regardless of type
    */
   const onClose = () => {
      setOpen(!open);
      const action = modalConfig.actionCallback;
      if (action) {
         action(null);
      } else {
         throw new Error(
            'ERROR: no action is defined when attempting to close modal'
         );
      }
   };

   /**
    * Gets passed down to AddTabsModal as prop and handles when user submits their choices, passing the tabs to getOutput
    * Only used when type is set to tabs
    */
   const handleAddTabs = () => {
      const { actionCallback } = modalConfig;
      if (actionCallback) {
         const result: FormattedTab[] = [];
         Object.keys(tabs).forEach((tabId) => {
            const currentTab = tabs[Number(tabId)];
            if (currentTab.isChecked == true) {
               result.push(currentTab);
            }
         });
         actionCallback(JSON.stringify(result));
      }
      setOpen(!open);
   };

   /**
    * Gets passed down to confirmationModal as prop and handles when user clicks Delete button
    * Used only when type is set to 'confirmation'
    */
   const confirmAction = () => {
      const action = modalConfig.actionCallback;
      if (action) {
         action(true);
      }
      setOpen(!open);
   };

   /**
    * todo Create useEffect that will be called whenever modalConfig changes, and only updates tabs if the modalConfig.type is set to "tabs"
    */
   return (
      <ModalContext.Provider value={{ showModal }}>
         {children}
         {modalConfig.type == 'input' ? (
            <InputModal
               open={open}
               handleClose={onClose}
               title={modalConfig.title}
               inputValue={inputValue}
               setInputValue={setInputValue}
               buttonAction={handleSubmitInput}
               body={modalConfig.body}
            />
         ) : (
            <></>
         )}
         {modalConfig.type == 'tabs' ? (
            <AddTabsModal
               open={open}
               handleClose={onClose}
               title={modalConfig.title}
               buttonAction={handleAddTabs}
               body={modalConfig.body}
               setTabs={setTabs}
               tabs={tabs}
            />
         ) : (
            <></>
         )}
         {modalConfig.type == 'confirmation' ? (
            <ConfirmationModal
               open={open}
               handleClose={onClose}
               title={modalConfig.title}
               buttonAction={confirmAction}
               body={modalConfig.body}
            />
         ) : (
            <></>
         )}
      </ModalContext.Provider>
   );
}

/**
 * Confirms that context is being used within child component of ModalProvider
 * @returns context
 */
const useModalContext = () => {
   const context = useContext(ModalContext);
   if (context === undefined) {
      throw new Error(
         'Context must be used within child component of Modal Provider'
      );
   }
   return context;
};

/**
 * Hook that is used to open modal, getting the value of input on close
 * @returns function use to get output from modal
 * Example usage: 
      const output = await getOutput({ title: 'Add tabs', type: 'tabs' });
      const output = await getOutput({ title: 'Group Name', type: 'input' });
      const output = await getOutput({ title: 'Confirm', type: 'confirmation' });
 */
export const useModal = () => {
   const { showModal } = useModalContext();
   // * getOutput will return null when user clicks Cancel button
   const getOutput = ({
      title,
      body,
      type,
   }: ModalInputs): Promise<boolean | string | null> =>
      new Promise((resolve) => {
         // * actionCallback is used to ensure no value is returned until modal is closed
         if (showModal !== null) {
            showModal({ actionCallback: resolve, title, body, type });
         }
      });
   return { getOutput };
};
