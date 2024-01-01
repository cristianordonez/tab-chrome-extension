import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Rule from '../../../utils/Rule';
import TabUtil from '../../../utils/TabUtil';
import CustomAlert from '../../components/CustomAlert';
import Row from '../../components/Row';
import StyledChild from '../../components/StyledChild';
import StyledContainer from '../../components/StyledContainer';
import useAlertSettings from '../../hooks/useAlertSettings';
import RuleGroup from './RuleGroup';

export default function GroupRules() {
   const [rules, setRules] = useState<Rule[]>([]);
   const [alertSettings, setAlertSettings] = useAlertSettings();

   const handleAlert = () => {
      setAlertSettings();
   };

   /**
    * Updates state with current saved rules
    */
   const updateRules = async () => {
      const currentRules = await Rule.getAll();
      setRules(currentRules);
   };

   useEffect(() => {
      updateRules();
   }, []);

   const handleOpenFullPage = () => {
      TabUtil.create({ url: '/popup.html#rules' }, true, true);
      window.close();
   };

   return (
      <StyledContainer>
         {rules.map((rule: Rule) => (
            <RuleGroup
               rule={rule}
               updateRules={updateRules}
               setAlertSettings={setAlertSettings}
            />
         ))}
         <StyledChild>
            <Row
               id={uuidv4()}
               PrefixIcon={<EditIcon />}
               title='Edit Rules'
               handleClick={handleOpenFullPage}
            />
         </StyledChild>
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </StyledContainer>
   );
}
