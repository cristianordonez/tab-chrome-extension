import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AllConditionGroupsType, ConditionGroupType } from '../../../types';

interface Props {
   groups: ConditionGroupType[];
   setConditionGroups: Dispatch<SetStateAction<AllConditionGroupsType>>;
   all_required: boolean;
}

export default function ConditionGroups({
   groups,
   setConditionGroups,
   all_required,
}: Props) {
   const [label, setLabel] = useState<string>(all_required ? 'AND' : 'OR');

   useEffect(() => {
      const updatedLabel = all_required ? 'AND' : 'OR';
      setLabel(updatedLabel);
   }, [all_required]);

   // const renderedGroups = groups.map((group) => (
   //    <ConditionGroup group={group} setConditionGroups={setConditionGroups} />
   // ));

   // return <GroupBuilder childrenArr={renderedGroups} label={label} />;
   return <></>;
}
