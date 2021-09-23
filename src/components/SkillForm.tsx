import React, { ReactEventHandler, useEffect, useState } from 'react';
import { addSkill, getSkills } from '../functions/skills';

const SkillForm = () => {
  const [skillName, setSkillName] = useState('');
  const [skillDate, setSkillDate] = useState('');
  const [skillNotes, setSkillNotes] = useState('');
  const [skillScore, setSkillScore] = useState(0);
  const [skillList, setSkillList] = useState<string[]>([]);

  useEffect(() => {
    const allSkills = getSkills();
    const today = new Date();
    const currentDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${(today.getDate()).toString().padStart(2, '0')}`;
    setSkillDate(currentDate);
    setSkillList(allSkills);
  }, []);

  function saveSkillForm(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // addSkill(skillName);
    const newSkill = {
      skillDate,
      skillName,
      skillScore,
      skillNotes,
    };
    console.log('newSkill', newSkill);
  }

  return (
    <>
      <datalist id="skillList">
        {
            skillList.map((s) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <option
                key={`skill-${s}`}
                value={s}
              />
            ))
        }
      </datalist>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={saveSkillForm}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-6 gap-6">

                {/* Skill Name */}
                <div className="col-span-6">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 text-left pl-2"
                  >
                    Skill
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Reading"
                      onChange={(e) => setSkillName(e.target.value)}
                      value={skillName}
                      list="skillList"
                    />
                  </div>
                </div>

                {/* Skill Score */}
                <div className="col-span-3">
                  <label
                    htmlFor="skillScore"
                    className="block text-sm font-medium text-gray-700 text-left pl-2"
                  >
                    Skill Score
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      name="skillScore"
                      id="skillScore"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Reading"
                      onChange={(e) => setSkillScore(parseInt(e.target.value, 10))}
                      value={skillScore}
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 text-left pl-2"
                  >
                    Date
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Reading"
                      onChange={(e) => setSkillDate(e.target.value)}
                      value={skillDate}
                      list="skillList"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="col-span-6">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Notes
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      onChange={(e) => setSkillNotes(e.target.value)}
                      value={skillNotes}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-1"
                    />
                  </div>
                </div>

              </div>

              <div className="text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SkillForm;
