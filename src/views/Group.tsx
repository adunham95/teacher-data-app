import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleGroup } from '../functions/group';

const Group = () => {
  const { id } = useParams();
  const [status, setStatus] = useState('loading');
  const [groupData, setGroupData] = useState();

  useEffect(() => {
    setGroupData(getSingleGroup(id));
    setStatus('loaded');
  }, [id]);

  if (status === 'loading') {
    return (
      <div>
        <h1>Group</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Group</h1>
    </div>
  );
};

export default Group;
