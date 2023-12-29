import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Switch, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { RuleType, SubRule } from '../../../types';
import Circle from '../../components/Circle';
import Row from '../../components/Row';
import RowGroupParent from '../../components/RowGroupParent';

interface Props {
   data: RuleType;
   groupId: number;
}

export default function RuleGroup({ data, groupId }: Props) {
   const [showChildren, setShowChildren] = useState<boolean>(false);

   const handleShowChildren = () => {
      setShowChildren(!showChildren);
   };

   return (
      <RowGroupParent
         groupId={groupId}
         ParentPrefixIcon={<Circle color={data.groupColor || 'grey'} />}
         ParentMiddleIcon={<Switch />}
         parentMiddleAction={handleShowChildren}
         ParentAffixIcon={
            <Tooltip title='Close tab group and all associated tabs'>
               <CloseIcon fontSize='small' />
            </Tooltip>
         }
         parentAffixAction={() => {}}
         title={data.title}
         secondary={data.title}
      >
         {data.subRules.map((subRule: SubRule, index) => (
            <Row
               key={subRule.query}
               id={index}
               isChild={true}
               title={subRule.query}
               AffixIcon={
                  <Tooltip title='Delete this rule from storage.'>
                     <DeleteIcon fontSize='small' />
                  </Tooltip>
               }
               affixAction={() => {}}
            />
         ))}
      </RowGroupParent>
   );
}
