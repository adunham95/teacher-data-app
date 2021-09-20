import { generateID } from './utils/utils';

export const StudentSchema = {
  id: generateID(),
  firstName: 'John',
  lastName: 'Doe',
};

export const dbNames = {
  meta: 'studentMeta',
};
