import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import GitHubUserList from '../../src/components/GitHub/User/List';

const users: FC = () => (
  <Fragment>
    <Head>
      <title>GitHub Users</title>
    </Head>
    <GitHubUserList users={[]}></GitHubUserList>
  </Fragment>
);
export default users;
