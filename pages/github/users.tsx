import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import GitHubUsersContainer from '../../src/containers/GitHub/Users';

const users: FC = () => (
  <Fragment>
    <Head>
      <title>GitHub Users</title>
    </Head>
    <GitHubUsersContainer />
  </Fragment>
);
export default users;
