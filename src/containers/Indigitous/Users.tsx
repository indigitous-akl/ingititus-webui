import React, { FC, useEffect, useState } from 'react';
import IndigitousUserList from '../../components/Indigitous/User/List';
import g from '../../lib/client';

const Users: FC = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async (): Promise<void> => {
    const response = await g()
      .V()
      .hasLabel('indigitous-user')
      .values('name')
      .toList();
    console.log(response);
    setUsers([]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <IndigitousUserList users={users}></IndigitousUserList>;
};

export default Users;
