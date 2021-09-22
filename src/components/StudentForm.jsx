import React, { useEffect, useState } from 'react';
import { getAllGroup } from '../functions/group';
import { saveStudent } from '../functions/students';

const defaultStudent = {
  id: '',
  firstName: '',
  lastName: '',
  color: '#000000',
};

const StudentFrom = ({ student = defaultStudent, defaultGroup = 'select', onSave = () => {} }) => {
  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);
  const [selectedGroup, setSelectedGroup] = useState(defaultGroup);
  const [selectedColor, setSelectedColor] = useState(student.color);
  const [groupData, setGroupData] = useState([]);
  const [groupSelectorOpen, setGroupSelector] = useState(false);

  useEffect(() => {
    const groups = getAllGroup();
    console.log(groups);
    setGroupData(groups);
  }, []);

  function saveStudentForm(e) {
    e.preventDefault();
    const newStudent = {
      id: '',
      groupID: [selectedGroup],
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

              {/* Group */}
              <div className="col-span-6">
                <label
                  htmlFor="group"
                  className="block text-sm font-medium text-gray-700"
                >
                  Group
                </label>
                <select
                  id="group"
                  name="group"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                >
                  <option value="select">
                    Select Group
                  </option>
                  {
                    groupData.map((g) => (
                      <option
                        value={g.id}
                        selected={defaultGroup === g.id}
                      >
                        {g.groupName}
                      </option>
                    ))
                  }
                </select>
              </div>

            </div>

            {/* Block Color */}
            {/* <div className="col-span-3">
              <label
                htmlFor="blockcolor"
                className="block text-sm font-medium text-gray-700 text-left pl-2"
              >
                Block Color
              </label>
              <div className="flex flex-wrap">
                {
                    colors.map((c) => (
                      <ColorBlock
                        colorData={c}
                        selectedColor={selectedColor}
                        setColor={(color) => setSelectedColor(color)}
                        key={`Color-${c.name}`}
                      />
                    ))
                  }
              </div>

            </div> */}

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
