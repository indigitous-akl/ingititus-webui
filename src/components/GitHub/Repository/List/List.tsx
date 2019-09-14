import React, { FC } from 'react';
import { GitHubRepositoryType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubRepositoryItem from '../Item';

interface Props {
  repositories: GitHubRepositoryType[];
  onChange?: (value: string) => void;
}

const List: FC<Props> = ({ repositories, onChange }) => (
  <SearchableList
    itemType="GitHub Repositories"
    items={repositories}
    onChange={onChange}
    element={GitHubRepositoryItem}
  />
);

export default List;
