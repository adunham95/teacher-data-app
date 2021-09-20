import React from 'react';
import StudentFrom from '../components/StudentForm';
import GroupForm from '../components/GroupForm';
import Modal from "../components/Modal"
import { useModal } from '../components/ModalContext';

const Dashboard = () => {
  const { setModalID } = useModal();
  
  return (
  <div>
    <h1>Home</h1>
    <button onClick={()=>setModalID("newBlock")}>New Group</button>
    {/* <StudentFrom /> */}
    {/* <GroupForm /> */}
    <Modal id="newBlock">
      <div className="bg-white">
        <h1 className="pt-4 px-4">New Group</h1>

      <GroupForm/>
      </div>
    </Modal>
  </div>
)};

export default Dashboard;
