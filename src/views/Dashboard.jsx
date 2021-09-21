import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentFrom from '../components/StudentForm';
import GroupForm from '../components/GroupForm';
import Modal from '../components/Modal';
import { useModal } from '../components/ModalContext';
import { getAllGroup } from '../functions/group';
import { getAllStudents } from '../functions/students';
import { getColorClassName } from '../components/ColorBlock';

const Dashboard = () => {
  const { setModalID } = useModal();
  const [groupData, setGroupData] = useState([]);
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const group = getAllGroup();
    const students = getAllStudents();
    setGroupData(group);
    setStudentData(students);
  }, []);

  function groupSave(newGroup) {
    setModalID('');
    setGroupData([...groupData, newGroup]);
  }

  return (
    <div>
      <header
        className="bg-white border-b-2"
      >
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main className="container p-1 mx-auto">
        <div className="flex">
          <div className="border-2 border-blue-500 rounded p-4 flex flex-col justify-center content-center w-1/2 md:w-1/5 mr-1 mb-1">
            <span className="text-center">Groups</span>
            <span className="text-center font-bold text-3xl">{groupData.length}</span>
          </div>
          <div className="border-2 border-blue-500 rounded p-4 flex flex-col justify-center content-center w-1/2 md:w-1/5 mr-1 mb-1">
            <span className="text-center">Students</span>
            <span className="text-center font-bold text-3xl">{studentData.length}</span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <GroupCard
            color="border-green-500"
            groupName="New Group"
            onClick={() => setModalID('newBlock')}
          />
          {
          groupData.map((g) => (
            <GroupCard
              key={g.id}
              {...g}
            />
          ))
        }
        </div>
      </main>
      <Modal id="newBlock">
        <div className="bg-white">
          <h1 className="pt-4 px-4">New Group</h1>

          <GroupForm onSave={(g) => groupSave(g)} />
        </div>
      </Modal>
    </div>
  );
};

function GroupCard({
  id = '', color, groupName, onClick,
}) {
  const classes = {
    inner: `${getColorClassName(color, 'border')} p-5 h-full flex justify-center text-center items-center border-2 transition duration-150  border-opacity-75 hover:border-opacity-100 rounded `,
    outter: 'p-1 w-1/3 md:w-1/5',
  };
  if (onClick === undefined) {
    return (
      <Link
        to={`/group/${id}`}
        className={classes.outter}
      >
        <div className={classes.inner}>
          {groupName}
        </div>
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={classes.outter}
    >
      <div className={classes.inner}>
        {groupName}
      </div>
    </button>
  );
}

export default Dashboard;
