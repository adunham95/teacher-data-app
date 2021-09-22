import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleGroup } from '../functions/group';
import Modal from '../components/Modal';
import { useModal } from '../components/ModalContext';
import StudentForm from '../components/StudentForm';
import { getColorClassName } from '../components/ColorBlock';
import { getAllStudentsByGroup } from '../functions/students';
import PageHeader from '../components/PageHeader';
import { GroupInterface } from '../interface';

const Group = () => {
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState('loading');
  const [groupData, setGroupData] = useState < GroupInterface>({ groupName: '', color: 'Red', id: '' });
  const { setModalID }: any = useModal();

  useEffect(() => {
    const data = getSingleGroup(id);
    const students = getAllStudentsByGroup(id);
    console.log(students);
    setGroupData(data);
    setStatus(data?.groupName ? '' : 'Error Loading Group');
  }, [id]);

  if (status === 'loading') {
    return (
      <div>
        <h1>Group</h1>
        <p>Loading...</p>
      </div>
    );
  }
  if (status !== '') {
    return (
      <div>
        <p>{status}</p>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={groupData.groupName}
        className={`${getColorClassName(groupData.color, 'border')}`}
      />
      <main className="container mx-auto p-2">
        <button onClick={() => setModalID('newStudent')}>New Student</button>
      </main>

      <Modal id="newStudent">
        <div className="bg-white">
          <h1 className="pt-4 px-4">New Student</h1>
          <StudentForm defaultGroup={groupData.id} />
        </div>
      </Modal>
    </div>
  );
};

export default Group;
