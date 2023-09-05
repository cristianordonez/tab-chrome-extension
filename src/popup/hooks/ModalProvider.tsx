import React, {
   ChangeEvent,
   ReactNode,
   createContext,
   useContext,
   useState,
} from 'react';
import Modal from '../components/Modal';

interface Props {
   children: ReactNode;
}

interface DialogConfig {
   actionCallback?: (confirmed: string | false) => void;
   body?: string;
   title: string;
}

const defaultDialogConfig = {
   title: '',
};

type ShowModal = ({ actionCallback, title, body }: DialogConfig) => void;

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
   const [dialogConfig, setDialogConfig] =
      useState<DialogConfig>(defaultDialogConfig);

   // context value returned that updates state and opens modal
   const showModal = ({ actionCallback, title, body }: DialogConfig) => {
      setInputValue('');
      setDialogConfig({ actionCallback, title, body });
      setOpen(!open);
   };

   // called when user clicks on Okay button
   const onConfirm = async (e: ChangeEvent<HTMLFormElement>) => {
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
         action(false);
      }
   };

   return (
      <ModalContext.Provider value={{ showModal }}>
         {children}
         <Modal
            open={open}
            handleClose={onClose}
            title={dialogConfig.title}
            inputValue={inputValue}
            setInputValue={setInputValue}
            buttonAction={onConfirm}
            buttonText='Save'
            body={dialogConfig.body}
         />
      </ModalContext.Provider>
   );
}

// confirms that context is being used within child component of ModalProvider
export const useModalContext = () => {
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

   const getOutput = ({ title, body }: DialogConfig): Promise<string | false> =>
      new Promise((resolve) => {
         if (showModal !== null) {
            showModal({ actionCallback: resolve, title, body });
         }
      });
   return { getOutput };
};
