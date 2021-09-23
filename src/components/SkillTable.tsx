import React, { useState } from 'react';
import { SkillInterface } from '../interface';
import Modal from './Modal';
import { useModal } from './ModalContext';

interface SkillTableProps{
    skills: Array<SkillInterface>
}

function formatDate(dateString:string) {
  const newDate = new Date(dateString);
  return `${newDate.getMonth() + 1}/${newDate.getDay()}/${newDate.getFullYear()}`;
}

const SkillTable = ({ skills }: SkillTableProps) => {
  const { setModalID }: any = useModal();
  const [singleSkill, setSingleSkill] = useState<SkillInterface>({
    id: '', skillName: '', skillDate: '', skillScore: 0, skillNotes: '',
  });

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {skills.map((s:SkillInterface) => (
                    <tr key={s.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4 hover:text-blue-700">
                            <button onClick={() => { setSingleSkill(s); setModalID('skillView'); }}>
                              {s.skillName}
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {formatDate(s.skillDate)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {singleSkill.skillScore}
                        {
                          singleSkill?.skillMaxScore ? singleSkill.skillScore / singleSkill.skillMaxScore : singleSkill.skillScore
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal id="skillView">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <h2 className="text-lg">{singleSkill.skillName}</h2>
                  <p className="text-xs text-gray-500">{formatDate(singleSkill.skillDate)}</p>
                </div>
                {/* <p className="col-span-3">{formatDa>te(singleSkill.skillDate)}</p> */}
                <p className="col-span-6">
                  Score:
                  {
                    singleSkill?.skillMaxScore ? `${(singleSkill.skillScore / singleSkill.skillMaxScore) * 100}%` : singleSkill.skillScore
                  }
                </p>
                <div className="col-span-6">
                  <label className=" text-base ">Notes</label>
                  <p className="">{singleSkill.skillNotes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SkillTable;
