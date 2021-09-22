import React, { useEffect, useState } from 'react';
import { getAllGroup } from '../functions/group';
import { saveStudent } from '../functions/students';
import { getColorClassName } from '../components/ColorBlock';

const defaultStudent = {
  id: '',
  firstName: '',
  lastName: '',
  color: '#000000',
};

const StudentFrom = ({ student = defaultStudent, defaultGroup = '', onSave = () => {} }) => {
  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);
  const [groupData, setGroupData] = useState([]);
  const [groupSelections, setGroupSelections] = useState([defaultGroup]);

  useEffect(() => {
    const groups = getAllGroup();
    console.log(groups);
    setGroupData(groups);
  }, []);

  function updateGroup(groupID) {
    console.log('groupID', groupID);
    let updateGroupData = [...groupSelections];
    if (updateGroupData.includes(groupID)) {
      // remove group
      updateGroupData = updateGroupData.filter((g) => g !== groupID);
    } else {
      // add group id
      updateGroupData.push(groupID);
    }
    console.log(updateGroupData);
    setGroupSelections(updateGroupData);
  }

  function saveStudentForm(e) {
    e.preventDefault();
    const newStudent = {
      id: '',
      groupID: groupSelections.filter((g) => g !== ''),
      firstName,
      lastName,
    };

    const savedStudent = saveStudent(newStudent);
    onSave(savedStudent);
  }

  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={saveStudentForm}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-6 gap-6">

              {/* First Name */}
              <div className="col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  First Name
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                    placeholder="John"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 text-left pl-2"
                >
                  Last Name
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                    placeholder="Smith"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>

              {/* Group Chip Based */}
              <div className="col-span-6">
                <label
                  htmlFor="groupChip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Group
                </label>
                <div className="max-h-half-screen overflow-y-scroll">
                  {
                      groupData.map((g) => (
                        <button
                          key={`colorBlock-${g.id}`}
                          type="button"
                          onClick={() => updateGroup(g.id)}
                          className={`px-6 py-4 md:px-4 md:py-2 inline-flex text-base leading-5 font-semibold rounded-full border-2 ${getColorClassName(g.color, 'border')} bg-opacity-20 ${getColorClassName(g.color, 'text')} mr-1 mt-1 ${groupSelections.includes(g.id) ? getColorClassName(g.color, 'bg') : 'bg-transparent'}`}
                        >
                          {g.groupName}
                        </button>
                      ))
                    }
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
  );
};

export default StudentFrom;
