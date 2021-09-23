import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../functions/students';
import PageHeader from '../components/PageHeader';
import { useModal } from '../components/ModalContext';
import Modal from '../components/Modal';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import { StudentInterface } from '../interface';

const Students = () => {
  const [allStudents, setAllStudent] = useState<StudentInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { setModalID }: any = useModal();

  useEffect(() => {
    const data = getAllStudents();
    setAllStudent(data);
  }, []);

  function savedStudent(student: any) {
    const data = [...allStudents, student];
    setAllStudent(data);
    setModalID('');
  }

  return (
    <div>
      <PageHeader title="Students" />
      <main className="container mx-auto">
        <div className="grid grid-cols-6">
          <div className="flex flex-col md:pt-1 md:pb-2 p-3 col-span-6 md:col-span-4">
            <label className="text-sm text-gray-500">Search</label>
            <input
              className=" border-2 "
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>
          <div className="col-span-6 px-3 pb-2 md:col-span-2 flex justify-center items-end">
            <button
              className="text-center bg-green-400 text-white rounded px-3 py-1 w-full"
              onClick={() => setModalID('newStudent')}
            >
              New Student
            </button>
          </div>
        </div>
        <StudentList students={allStudents.filter((p:any) => `${p.firstName} ${p.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()))} />
      </main>
      <Modal id="newStudent">
        <StudentForm onSave={(stu: any) => savedStudent(stu)} />
      </Modal>
    </div>
  );
};

export default Students;
