import React, {
   ReactNode,
   createContext,
   useContext,
   useEffect,
   useState,
} from 'react';
import TabUtil from '../../utils/TabUtil';

const PopupStatusContext = createContext(true);

interface Props {
   children: ReactNode;
}

/**
 * Provider for determining if app is currently open as popup
 * @param param0 Any react components
 * @returns Provider used to determine if application is currently open as popup or in separate tab
 */
export default function PopupStatusProvider({ children }: Props) {
   const [isPopup, setIsPopup] = useState<boolean>(true);

   useEffect(() => {
      const updateIsPopup = async () => {
         const current = await TabUtil.getCurrent();
         setIsPopup(current == undefined);
      };
      updateIsPopup();
   }, []);

   return (
      <PopupStatusContext.Provider value={isPopup}>
         {children}
      </PopupStatusContext.Provider>
   );
}

export const usePopupStatus = () => {
   const isPopup = useContext(PopupStatusContext);
   return isPopup;
};
