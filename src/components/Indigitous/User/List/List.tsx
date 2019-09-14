import React, { FC } from 'react';
import { IndigitousUserType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import IndigitousUserItem from '../Item';

interface Props {
  users: IndigitousUserType[];
  onChange?: (value: string) => void;
}

const List: FC<Props> = ({ users, onChange }) => (
  <SearchableList itemType="Indigitous Users" items={users} onChange={onChange} element={IndigitousUserItem} />
);

export default List;
