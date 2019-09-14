import React, { FC } from 'react';
import { GitHubRepositoryType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubRepositoryItem from '../Item';

interface Props {
  loading?: boolean;
  items: GitHubRepositoryType[];
}

const List: FC<Props> = ({ loading, items }) => (
  <SearchableList loading={loading} itemType="GitHub Repositories" items={items} element={GitHubRepositoryItem} />
);

export default List;
