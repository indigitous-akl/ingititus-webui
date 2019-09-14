import { useRouter } from 'next/dist/client/router';
import React, { FC, Fragment } from 'react';
import IndigitousUser from '../../../src/components/Indigitous/User';
import ItemContainer from '../../../src/containers/Item';

const users: FC = () => {
  const router = useRouter();

  return router.query.uid ? (
    <ItemContainer element={IndigitousUser} type="indigitous_user" uid={router.query.uid as string} />
  ) : (
    <Fragment />
  );
};
export default users;
