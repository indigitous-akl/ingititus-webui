import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import GitHubRepositoryList from '../../src/components/GitHub/Repository/List';
import ListContainer from '../../src/containers/List';

const GitHubRepositoriesPage: FC = () => (
  <Fragment>
    <Head>
      <title>GitHub Repository</title>
    </Head>
    <ListContainer element={GitHubRepositoryList} type="repository" />
  </Fragment>
);
export default GitHubRepositoriesPage;
