import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GroupChip from '../components/GroupChip';
import PageHeader from '../components/PageHeader';
import { getSingleStudent } from '../functions/students';
import { StudentInterface } from '../interface';

const SingleStudent = () => {
  const [student, setStudent] = useState<StudentInterface>({
    firstName: '', lastName: '', groups: [], id: '',
  });
  const { id } = useParams<{ id: string }>();
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const stu = getSingleStudent(id);
    console.log(stu);
    setStudent(stu);
    if (stu)setStatus(stu?.id !== '1234-error' ? '' : 'Error Loading Student');
  }, [id]);

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
        <div>
          {student.groups.map((g) => <GroupChip {...g} />)}
        </div>
      </main>
    </div>
  );
};

export default SingleStudent;
