import React, {
   ChangeEvent,
   ReactNode,
   createContext,
   useContext,
   useState,
} from 'react';
import AddTabsModal from '../components/modal/AddTabsModal';
import InputModal from '../components/modal/InputModal';

interface Props {
   children: ReactNode;
}

interface DialogConfig {
   actionCallback?: (output: string | null) => void;
   body?: string;
   title: string;
   type: 'input' | 'confirmation' | 'tabs';
}

const defaultDialogConfig = {
   title: '',
   type: 'input' as const,
};

type ShowModal = ({ actionCallback, title, body }: DialogConfig) => void;

interface ContextType {
   showModal: ShowModal | null;
}

const defaultContext = {
   showModal: null,
};

const ModalContext = createContext<ContextType>(defaultContext);

// todo complete this by using a modalType state that shows different modals based on the type (create entirelty new modal componetns based on this tpye)
export default function ModalProvider({ children }: Props) {
   const [open, setOpen] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>('');
   const [dialogConfig, setDialogConfig] =
      useState<DialogConfig>(defaultDialogConfig);

   // context value returned that updates state and opens modal
   const showModal = ({ actionCallback, title, body, type }: DialogConfig) => {
      setInputValue('');
      setDialogConfig({ actionCallback, title, body, type });
      setOpen(!open);
   };

   // called when user clicks on Okay button
   const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      const action = dialogConfig.actionCallback;
      if (action !== undefined) {
         action(inputValue);
      }
      setOpen(!open);
   };

   // called when user clicks on cancel button
   const onClose = () => {
      setOpen(!open);
      const action = dialogConfig.actionCallback;
      if (action !== undefined) {
         action(null);
      }
   };

   const handleAddTabs = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('test: ');
      console.log('e: ', e);
   };

   return (
      <ModalContext.Provider value={{ showModal }}>
         {children}
         {dialogConfig.type == 'input' ? (
            <InputModal
               open={open}
               handleClose={onClose}
               title={dialogConfig.title}
               inputValue={inputValue}
               setInputValue={setInputValue}
               buttonAction={onSubmit}
               body={dialogConfig.body}
            />
         ) : (
            <></>
         )}
         {dialogConfig.type == 'tabs' ? (
            <AddTabsModal
               open={open}
               handleClose={onClose}
               title={dialogConfig.title}
               buttonAction={handleAddTabs}
               body={dialogConfig.body}
            />
         ) : (
            <></>
         )}
      </ModalContext.Provider>
   );
}

// confirms that context is being used within child component of ModalProvider
const useModalContext = () => {
   const context = useContext(ModalContext);
   if (context === undefined) {
      throw new Error(
         'Context must be used within child component of Modal Provider'
      );
   }
   return context;
};

// hook that is used to open modal, getting the value of input on close
export const useModal = () => {
   const { showModal } = useModalContext();

   // getOutput will return null when user clicks Cancel button
   const getOutput = ({
      title,
      body,
      type,
   }: DialogConfig): Promise<string | null> =>
      new Promise((resolve) => {
         if (showModal !== null) {
            showModal({ actionCallback: resolve, title, body, type });
         }
      });
   return { getOutput };
};
