import { generateID } from './utils/utils';

export const StudentSchema = {
  id: '1234-error',
  firstName: '',
  lastName: '',
  groupID: [],
};

export const GroupSchema = {
  id: generateID(),
  groupName: 'John',
  color: '#000',
};

export const dbNames = {
  meta: 'studentMeta',
  groupMeta: 'groupMeta',
  skillsMeta: 'skillList',
};
