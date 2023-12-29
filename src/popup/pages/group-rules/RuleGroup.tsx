import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Switch, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { SubRule } from '../../../types';
import Rule from '../../../utils/Rule';
import Circle from '../../components/Circle';
import Row from '../../components/Row';
import RowGroupParent from '../../components/RowGroupParent';

interface Props {
   rule: Rule;
   groupId: number;
}

export default function RuleGroup({ rule, groupId }: Props) {
   const [checked, setChecked] = useState<boolean>(rule.active);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      // todo update Rule active status when clicked
   };

   // todo add a unique id to each subrule

   /**
    * todo Deletes rule from storage and triggers rerender
    * @returns void
    */
   const handleDeleteRule = () => {
      return;
   };

   /**
    * todo Deletes a subrule from current rule
    * @returns void
    */
   const handleDeleteSubRule = () => {
      return;
   };

   return (
      <RowGroupParent
         groupId={groupId}
         ParentPrefixIcon={<Circle color={rule.groupColor || 'grey'} />}
         ParentMiddleIcon={<Switch checked={checked} onChange={handleChange} />}
         enableMiddleIconHover={false}
         ParentAffixIcon={
            <Tooltip title='Delete this rule from storage.'>
               <DeleteIcon fontSize='small' />
            </Tooltip>
         }
         parentAffixAction={handleDeleteRule}
         title={rule.title}
         secondary={rule.formatActionText()}
      >
         {rule.subRules.map((subRule: SubRule, index) => (
            <Row
               key={subRule.query}
               id={index}
               isChild={true}
               title={Rule.formatSubRuleText(subRule)}
               AffixIcon={
                  <Tooltip title='Remove condition from rule.'>
                     <CloseIcon fontSize='small' />
                  </Tooltip>
               }
               affixAction={handleDeleteSubRule}
            />
         ))}
      </RowGroupParent>
   );
}
