import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import GitHubLanguageList from '../../src/components/GitHub/Language/List';

const languages: FC = () => (
  <Fragment>
    <Head>
      <title>GitHub Languages</title>
    </Head>
    <GitHubLanguageList languages={[]}></GitHubLanguageList>
  </Fragment>
);
export default languages;
