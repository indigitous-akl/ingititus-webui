import React, { FC } from 'react';
import { GitHubLanguageType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubLanguageItem from '../Item';

interface Props {
  loading?: boolean;
  items: GitHubLanguageType[];
}

const List: FC<Props> = ({ loading, items }) => (
  <SearchableList loading={loading} itemType="GitHub Languages" items={items} element={GitHubLanguageItem} />
);

export default List;
