import React, { FC } from 'react';
import { GitHubLanguageType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubLanguageItem from '../Item';

interface Props {
  languages: GitHubLanguageType[];
}

const List: FC<Props> = ({ languages }) => (
  <SearchableList itemType="GitHub Languages" items={languages} element={GitHubLanguageItem} />
);

export default List;
