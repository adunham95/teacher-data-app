import React, { useState } from 'react';
import { colors, ColorInterface } from '../functions/utils/data.ts';
import { saveGroup } from '../functions/group';
import { ColorBlock } from './ColorBlock';

const defaultGroup = {
  id: '',
  name: '',
  color: '#000000',
};

const GroupForm = ({ group = defaultGroup }) => {
  const [groupName, setGroupName] = useState(group.name);
  const [selectedColor, setSelectedColor] = useState(group.color);

  function saveGroupForm(e: any) {
    e.preventDefault();
    saveGroup({
      id: '',
      groupName,
      color: selectedColor,
    });
  }

  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={saveGroupForm}>
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div className="grid grid-cols-6 gap-6">

            {/* First Name */}
            <div className="col-span-6">
              <label
                htmlFor="groupName"
                className="block text-sm font-medium text-gray-700 text-left pl-2"
              >
                Group Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="groupName"
                  id="groupName"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  placeholder="Hedgehogs"
                  onChange={(e) => setGroupName(e.target.value)}
                  value={groupName}
                />
              </div>
            </div>

            {/* Block Color */}
            <div className="col-span-6">
              <label
                htmlFor="blockcolor"
                className="block text-sm font-medium text-gray-700 text-left pl-2"
              >
                Block Color
              </label>
              <div className="flex flex-wrap">
                {
                    colors.map((c: ColorInterface) => (
                      <ColorBlock
                        colorData={c}
                        selectedColor={selectedColor}
                        setColor={(sColor) => setSelectedColor(sColor)}
                        key={`Color-${c.name}`}
                      />
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
      </form>
    </div>
  );
};

export default GroupForm;
