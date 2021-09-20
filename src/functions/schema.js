import { generateID } from './utils/utils';

export const StudentSchema = {
  id: generateID(),
  firstName: 'John',
  lastName: 'Doe',
};

export const GroupSchema = {
  id: generateID(),
  groupName: 'John',
  color: '#000',
};

export const dbNames = {
  meta: 'studentMeta',
  groupMeta: 'groupMeta',
};
