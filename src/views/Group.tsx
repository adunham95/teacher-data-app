import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleGroup } from '../functions/group';
import Modal from '../components/Modal';
import { useModal } from '../components/ModalContext';
import StudentForm from '../components/StudentForm';
import { getColorClassName } from '../components/ColorBlock';

const Group = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('loading');
  const [groupData, setGroupData] = useState();
  const { setModalID } = useModal();

  useEffect(() => {
    const data = getSingleGroup(id);
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
      <header
        className={`bg-white border-b-2 ${getColorClassName(groupData.color, 'border')}`}
      >
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{groupData.groupName}</h1>
        </div>
      </header>
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
