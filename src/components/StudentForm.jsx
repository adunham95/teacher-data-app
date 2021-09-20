import React, { useState } from 'react';
import { colors } from '../functions/utils/data.ts';
import { ColorBlock } from './ColorBlock';

const defaultStudent = {
  id: '',
  firstName: '',
  lastName: '',
  color: '#000000',
};

const StudentFrom = ({ student = defaultStudent }) => {
  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);
  const [selectedColor, setSelectedColor] = useState(student.color);

  function saveStudentForm() {

  }

  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={saveStudentForm}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className='grid grid-cols-6 gap-6"'>

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
            </div>

            {/* Block Color */}
            <div className="col-span-3">
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

            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentFrom;
