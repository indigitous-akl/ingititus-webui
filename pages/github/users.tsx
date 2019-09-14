import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import GitHubUserList from '../../src/components/GitHub/User/List';
import ListContainer from '../../src/containers/List';

const GitHubUsersPage: FC = () => (
  <Fragment>
    <Head>
      <title>GitHub Users</title>
    </Head>
    <ListContainer element={GitHubUserList} type="github_user" />
  </Fragment>
);
export default GitHubUsersPage;
