import React, { FC, useEffect, useState } from 'react';
import IndigitousUserList from '../../components/Indigitous/User/List';
import g from '../../lib/client';
import { IndigitousUserType } from '../../lib/types';

const Users: FC = () => {
  const [users, setUsers] = useState([] as IndigitousUserType[]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <IndigitousUserList loading={loading} users={users}></IndigitousUserList>;
};

export default Users;
