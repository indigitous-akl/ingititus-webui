import React, { FC, useEffect, useState } from 'react';
import IndigitousUserList from '../../components/Indigitous/User/List';
import g from '../../lib/client';
import { IndigitousUserType } from '../../lib/types';

const Users: FC = () => {
  const [users, setUsers] = useState([] as IndigitousUserType[]);

  const fetchData = async (): Promise<void> => {
    const response = await g()
      .V()
      .hasLabel('indigitous_user')
      .valueMap()
      .toList();
    const users = response.map(remoteUser => {
      let user = {};
      remoteUser.toJSON().forEach(([key, value]) => {
        user[key] = value[0];
      });
      return user as IndigitousUserType;
    });
    setUsers(users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <IndigitousUserList users={users}></IndigitousUserList>;
};

export default Users;
