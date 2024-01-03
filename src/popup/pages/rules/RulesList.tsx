import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Rule from '../../../utils/Rule';
import TabUtil from '../../../utils/TabUtil';
import CustomAlert from '../../components/CustomAlert';
import Row from '../../components/Row';
import StyledChild from '../../components/StyledChild';
import StyledContainer from '../../components/StyledContainer';
import useAlertSettings from '../../hooks/useAlertSettings';
import { usePopupStatus } from '../../provider/PopupStatusProvider';
import RuleGroup from './RuleGroup';

export default function RulesList() {
   const isPopup = usePopupStatus();
   const navigate = useNavigate();
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

   /**
    * Opens application in separate tab and closes popup
    */
   const handleOpenFullPage = () => {
      TabUtil.create({ url: '/popup.html' }, true, true);
      window.close();
   };

   /**
    * Redirects user to the rule/new form
    */
   const handleAddRule = () => {
      navigate('new');
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
            {isPopup ? (
               <Row
                  id={uuidv4()}
                  PrefixIcon={<EditIcon />}
                  title='Edit Rules'
                  handleClick={handleOpenFullPage}
               />
            ) : (
               <Row
                  id={uuidv4()}
                  PrefixIcon={<AddIcon />}
                  title='Add Rule'
                  handleClick={handleAddRule}
               />
            )}
         </StyledChild>
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </StyledContainer>
   );
}
