import Head from 'next/head';
import React, { FC, Fragment } from 'react';
import IndigitousUserList from '../../src/components/Indigitous/User/List';
import ListContainer from '../../src/containers/List';

const users: FC = () => (
  <Fragment>
    <Head>
      <title>Indigitous Users</title>
    </Head>
    <ListContainer element={IndigitousUserList} type="indigitous_user" />
  </Fragment>
);
export default users;
