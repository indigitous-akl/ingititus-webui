import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import GitHubRepositoryList from '../../src/components/GitHub/Repository/List';

const repositories: FC = () => (
  <Fragment>
    <Head>
      <title>GitHub Repositories</title>
    </Head>
    <GitHubRepositoryList repositories={[]}></GitHubRepositoryList>
  </Fragment>
);
export default repositories;
