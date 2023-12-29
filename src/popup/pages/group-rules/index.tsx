import React, { useEffect, useState } from 'react';
import Rule from '../../../utils/Rule';
import RuleGroup from './RuleGroup';

export default function GroupRules() {
   const [rules, setRules] = useState<Rule[]>([]);

   useEffect(() => {
      const updateRules = async () => {
         const currentRules = await Rule.getAll();
         setRules(currentRules);
      };
      updateRules();
   }, []);

   return (
      <div>
         {rules.map((rule: Rule, index) => (
            <RuleGroup data={rule.getData()} groupId={index} />
         ))}
      </div>
   );
}
