import { generateID } from './utils/utils';
import { getFromLocal, saveToLocal } from './database';
import { StudentSchema, dbNames } from './schema';

export function saveBlock(newBlockData) {
  // Creates the block from the schema
  const newBlock = { ...StudentSchema, ...newBlockData };
  if (newBlockData.id === '') {
    // Gets the metadata
    const meta = getFromLocal(dbNames.meta);
    // Adds id to the block
    newBlock.id = generateID();
    // Adds the id to the list of block
    meta.push(newBlock.id);
    // Saves metadata
    saveToLocal(dbNames.meta, meta);
  }
  console.log(newBlock);
  // Saves block
  saveToLocal(newBlock.id, newBlock);
}

export function getAllBlocks() {
  // Gets the metadata
  const meta = getFromLocal(dbNames.meta);
  const allBlocks = meta.map((id) => ({ ...StudentSchema, ...getFromLocal(id) }));
  console.log(allBlocks);
  return allBlocks;
}
