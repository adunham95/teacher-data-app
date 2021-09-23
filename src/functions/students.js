import { generateID } from './utils/utils';
import { getFromLocal, saveToLocal } from './database';
import { StudentSchema, dbNames } from './schema';
import { getSingleGroup } from './group';

export function saveStudent(newBlockData) {
  // Creates the block from the schema
  const newBlock = { ...StudentSchema, ...newBlockData };
  if (newBlockData.id === '') {
    // Gets the metadata
    const meta = getFromLocal(dbNames.meta);
    // Adds id to the block
    newBlock.id = `stu-${generateID()}`;
    // Adds the id to the list of block
    meta.push({ id: newBlock.id, groups: newBlock.groupID });
    // Saves metadata
    saveToLocal(dbNames.meta, meta);
  }
  console.log(newBlock);
  // Saves block
  saveToLocal(newBlock.id, newBlock);
  return getSingleStudent(newBlock.id);
}

export function getAllStudents() {
  // Gets the metadata
  const meta = getFromLocal(dbNames.meta);
  const allBlocks = meta.map((u) => (getSingleStudent(u.id)));
  console.log('allBlocks', allBlocks);
  return allBlocks;
}

export function getAllStudentsByGroup(groupID) {
  // Gets the metadata
  const meta = getFromLocal(dbNames.meta);
  const filteredStudents = meta.filter((s) => s.groups.includes(groupID));
  const allStudents = filteredStudents.map((u) => (getSingleStudent(u.id)));
  return allStudents;
}

export function getSingleStudent(id) {
  const stu = { ...StudentSchema, ...getFromLocal(id) };
  console.log(stu);
  stu.groups = stu.groupID.map((g) => getSingleGroup(g));
  return stu;
}

export function addSKillCheck(skillData, id) {
  const stu = { ...StudentSchema, ...getFromLocal(id) };
  if (!stu?.skillData) {
    stu.skillData = [];
  }
  stu.skillData.push(skillData);
  saveToLocal(id, stu);
  return stu;
}
