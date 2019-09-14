import React, { FC } from 'react';
import { GitHubLanguageType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubLanguageItem from '../Item';

interface Props {
  languages: GitHubLanguageType[];
  onChange?: (value: string) => void;
}

const List: FC<Props> = ({ languages, onChange }) => (
  <SearchableList itemType="GitHub Languages" items={languages} onChange={onChange} element={GitHubLanguageItem} />
);

export default List;
