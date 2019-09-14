import React, { FC } from 'react';
import { GitHubUserType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubUserItem from '../Item';

interface Props {
  loading: boolean;
  users: GitHubUserType[];
}

const List: FC<Props> = ({ loading, users }) => (
  <SearchableList loading={loading} itemType="GitHub Users" items={users} element={GitHubUserItem} />
);

export default List;
