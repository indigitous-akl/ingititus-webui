import React, { FC } from 'react';
import { GitHubRepositoryType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubRepositoryItem from '../Item';

interface Props {
  repositories: GitHubRepositoryType[];
}

const List: FC<Props> = ({ repositories }) => (
  <SearchableList itemType="GitHub Repositories" items={repositories} element={GitHubRepositoryItem} />
);

export default List;
