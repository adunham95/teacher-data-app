import React from 'react';
import { getColorClassName } from './ColorBlock';

interface GroupChipProps{
    groupName: string,
    color: string
}

const GroupChip = ({ groupName, color }: GroupChipProps) => (
  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getColorClassName(color, 'bg')} bg-opacity-20 ${getColorClassName(color, 'text')} mr-1`}>
    {groupName}
  </span>
);

export default GroupChip;
