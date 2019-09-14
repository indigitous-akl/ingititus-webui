import { useRouter } from 'next/dist/client/router';
import React, { FC, Fragment } from 'react';
import GitHubUser from '../../../src/components/GitHub/User';
import ItemContainer from '../../../src/containers/Item';

const users: FC = () => {
  const router = useRouter();

  return router.query.uid ? (
    <ItemContainer element={GitHubUser} type="github_user" uid={router.query.uid as string} />
  ) : (
    <Fragment />
  );
};
export default users;
