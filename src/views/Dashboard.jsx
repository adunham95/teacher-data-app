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

  return (
    <div>
      <h1>Home</h1>
      <div>
        <div>
          {groupData.length}
        </div>
        <div>
          {studentData.length}
        </div>
      </div>
      <div>
        <GroupCard
          color="bg-green-500"
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
      <Modal id="newBlock">
        <div className="bg-white">
          <h1 className="pt-4 px-4">New Group</h1>

          <GroupForm />
        </div>
      </Modal>
    </div>
  );
};

function GroupCard({
  id = '', color, groupName, onClick,
}) {
  console.log(onClick);
  if (onClick === undefined) {
    return (
      <Link
        to={`/group/${id}`}
        className={getColorClassName(color, 'bg')}
      >
        {groupName}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={getColorClassName(color, 'bg')}
    >
      {groupName}
    </button>
  );
}

export default Dashboard;
