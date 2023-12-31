import React, { useEffect, useState } from 'react';
import Rule from '../../../utils/Rule';
import CustomAlert from '../../components/CustomAlert';
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
   console.log('rules: ', rules);

   return (
      <div>
         {rules.map((rule: Rule) => (
            <RuleGroup
               rule={rule}
               updateRules={updateRules}
               setAlertSettings={setAlertSettings}
            />
         ))}
         <CustomAlert alertSettings={alertSettings} handleAlert={handleAlert} />
      </div>
   );
}
