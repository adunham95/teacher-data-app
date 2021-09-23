import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GroupChip from '../components/GroupChip';
import Modal from '../components/Modal';
import { useModal } from '../components/ModalContext';
import PageHeader from '../components/PageHeader';
import SkillForm from '../components/SkillForm';
import SkillTable from '../components/SkillTable';
import { getSingleStudent } from '../functions/students';
import { StudentInterface } from '../interface';

const SingleStudent = () => {
  const [student, setStudent] = useState<StudentInterface>({
    firstName: '', lastName: '', groups: [], id: '', skillData: [],
  });
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState('loading');
  const { setModalID }: any = useModal();

  useEffect(() => {
    const stu = getSingleStudent(id);
    console.log(stu);
    setStudent(stu);
    if (stu)setStatus(stu?.id !== '1234-error' ? '' : 'Error Loading Student');
  }, [id]);

  function skillSubmit(updatedStudent) {
    setModalID('');
    setStudent({ ...student, ...updatedStudent });
  }

  if (status === 'loading') {
    return (
      <div>
        <PageHeader title="Students" />
        <p>Loading...</p>
      </div>
    );
  }

  if (status !== '') {
    return (
      <div>
        <PageHeader title="Students" />
        <main className="container mx-auto">
          <p>{status}</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title={student.firstName} />
      <main className="container mx-auto">
        <div className="m-2 md:m-0">
          {student.groups.map((g) => <GroupChip {...g} />)}
        </div>
        <div className="flex-auto flex space-x-3 m-2 md:m-0 md:mt-1">
          <button
            className="w-1/2 flex items-center justify-center py-1 rounded-md border bg-blue-600 border-blue-600 text-white"
            type="button"
            onClick={() => setModalID('newSkill')}
          >
            Add Skill Check
          </button>
          {/* <button
            className="w-1/2 flex items-center justify-center py-1 rounded-md border bg-purple-600 border-purple-600 text-white"
            type="button"
          >
            Add Behavior
          </button> */}
        </div>
        <div className="mt-2">
          <SkillTable skills={student.skillData} />
        </div>
      </main>
      <Modal id="newSkill">
        <SkillForm
          studentID={id}
          onSave={(stu) => skillSubmit(stu)}
        />
      </Modal>
    </div>
  );
};

export default SingleStudent;
