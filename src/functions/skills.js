import { getFromLocal, saveToLocal } from './database';
import { dbNames } from './schema';

export function addSkill(skillName) {
  let skillList = getFromLocal(dbNames.skillsMeta);
  if (!skillList.includes(skillName)) {
    skillList = [...skillList, skillName];
    saveToLocal(dbNames.skillsMeta, skillList);
  }
  return skillList;
}

export function getSkills() {
  return getFromLocal(dbNames.skillsMeta);
}
