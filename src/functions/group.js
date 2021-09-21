import { generateID } from './utils/utils';
import { getFromLocal, saveToLocal } from './database';
import { GroupSchema, dbNames } from './schema';

export function saveGroup(newBlockData) {
  // Creates the block from the schema
  const newBlock = { ...GroupSchema, ...newBlockData };
  if (newBlockData.id === '') {
    // Gets the metadata
    const meta = getFromLocal(dbNames.groupMeta);
    // Adds id to the block
    newBlock.id = generateID();
    // Adds the id to the list of block
    meta.push(newBlock.id);
    // Saves metadata
    saveToLocal(dbNames.groupMeta, meta);
  }
  console.log(newBlock);
  // Saves block
  saveToLocal(newBlock.id, newBlock);
}

export function getAllGroup() {
  // Gets the metadata
  const meta = getFromLocal(dbNames.groupMeta);
  const allBlocks = meta.map((id) => ({ ...GroupSchema, ...getFromLocal(id) }));
  console.log(allBlocks);
  return allBlocks;
}

export function getSingleGroup(id) {
  return getFromLocal(id);
}
