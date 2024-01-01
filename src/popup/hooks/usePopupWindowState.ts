import { useEffect, useState } from 'react';
import TabUtil from '../../utils/TabUtil';

export function usePopupWindowStatus() {
   const [isPopup, setIsPopup] = useState<boolean>(true);

   useEffect(() => {
      const updateIsPopup = async () => {
         const current = await TabUtil.getCurrent();
         console.log('current in updateIspopup: ', current);
         setIsPopup(current == undefined);
      };
      updateIsPopup();
   }, []);

   return isPopup;
}
