import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleStudent = () => {
  const [student, setStudent] = useState('');
  const { id } = useParams();
  return (
    <div />
  );
};

export default SingleStudent;
