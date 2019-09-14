import React, { FC } from 'react';
import { GitHubUserType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubUserItem from '../Item';

interface Props {
  loading?: boolean;
  items: GitHubUserType[];
}

const List: FC<Props> = ({ loading, items }) => (
  <SearchableList loading={loading} itemType="GitHub Users" items={items} element={GitHubUserItem} />
);

export default List;
