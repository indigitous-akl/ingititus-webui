import React, { FC } from 'react';
import { GitHubUserType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import GitHubUserItem from '../Item';

interface Props {
  users: GitHubUserType[];
  onChange?: (value: string) => void;
}

const List: FC<Props> = ({ users, onChange }) => (
  <SearchableList itemType="GitHub Users" items={users} onChange={onChange} element={GitHubUserItem} />
);

export default List;
