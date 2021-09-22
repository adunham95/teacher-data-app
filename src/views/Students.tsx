import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllStudents } from '../functions/students';
import PageHeader from '../components/PageHeader';
import GroupChip from '../components/GroupChip';

const Students = () => {
  const [allStudents, setAllStudent] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const data = getAllStudents();
    setAllStudent(data);
  }, []);

  return (
    <div>
      <PageHeader title="Students" />
      <main className="container mx-auto">
        <div className="grid grid-cols-6">
          <div className="flex flex-col md:pt-1 md:pb-2 p-3 col-span-5">
            <label className="text-sm text-gray-500">Search</label>
            <input
              className=" border-2 "
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>
          <div className="col-span-1 flex justify-center items-center">
            <button className="text-center bg-green-400 text-white rounded px-3 py-1">New Student</button>
          </div>
        </div>
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
                        Groups
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {allStudents.filter((p) => `${p.firstName} ${p.lastName}`.includes(searchTerm)).map((person) => (
                      <tr key={person.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <Link className='className="text-sm font-medium text-gray-900"'>
                                {person.firstName}
                                {' '}
                                {person.lastName}
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {
                                person.groups.map((g) => (
                                  <GroupChip {...g} />
                                ))
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
      </main>
    </div>
  );
};

export default Students;
