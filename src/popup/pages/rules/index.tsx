import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rule from '../../../utils/Rule';
import TabUtil from '../../../utils/TabUtil';
import Row from '../../components/Row';
import StyledChild from '../../components/StyledChild';
import StyledContainer from '../../components/StyledContainer';
import { usePopupStatus } from '../../provider/PopupStatusProvider';
import RuleGroup from './RuleGroup';

export default function Rules() {
   const isPopup = usePopupStatus();
   const navigate = useNavigate();
   const [rules, setRules] = useState<Rule[]>([]);

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
            <RuleGroup rule={rule} updateRules={updateRules} />
         ))}
         <StyledChild>
            {isPopup ? (
               <Row
                  PrefixIcon={<EditIcon />}
                  title='Edit/Add Rules'
                  handleClick={handleOpenFullPage}
               />
            ) : (
               <Row
                  PrefixIcon={<AddIcon />}
                  title='Add Rule'
                  handleClick={handleAddRule}
               />
            )}
         </StyledChild>
      </StyledContainer>
   );
}
