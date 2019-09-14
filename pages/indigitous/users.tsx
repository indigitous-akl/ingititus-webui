import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import IndigitousUsersContainer from '../../src/containers/Indigitous/Users';

const users: FC = () => (
  <Fragment>
    <Head>
      <title>Indigitous Users</title>
    </Head>
    <IndigitousUsersContainer />
  </Fragment>
);
export default users;
