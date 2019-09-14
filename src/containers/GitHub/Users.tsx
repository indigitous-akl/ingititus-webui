import React, { FC, useEffect, useState } from 'react';
import GitHubUserList from '../../components/GitHub/User/List';
import g from '../../lib/client';
import { GitHubUserType } from '../../lib/types';

const Users: FC = () => {
  const [users, setUsers] = useState([] as GitHubUserType[]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (): Promise<void> => {
    const response = await g()
      .V()
      .hasLabel('github_user')
      .valueMap()
      .toList();
    const users = response.map(remoteUser => {
      let user = {};
      remoteUser.toJSON().forEach(([key, value]) => {
        user[key] = value[0];
      });
      return user as GitHubUserType;
    });
    setUsers(users);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <GitHubUserList loading={loading} users={users}></GitHubUserList>;
};

export default Users;
