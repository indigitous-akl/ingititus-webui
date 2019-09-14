import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import GitHubLanguageList from '../../src/components/GitHub/Language/List';
import ListContainer from '../../src/containers/List';

const GitHubLanguagesPage: FC = () => (
  <Fragment>
    <Head>
      <title>GitHub Languages</title>
    </Head>
    <ListContainer element={GitHubLanguageList} type="github_language" />
  </Fragment>
);
export default GitHubLanguagesPage;
