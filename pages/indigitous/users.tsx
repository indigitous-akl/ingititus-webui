import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import IndigitousUserList from '../../src/components/Indigitous/User/List';

const users: FC = () => (
  <Fragment>
    <Head>
      <title>Indigitous Users</title>
    </Head>
    <IndigitousUserList users={[]}></IndigitousUserList>
  </Fragment>
);
export default users;
