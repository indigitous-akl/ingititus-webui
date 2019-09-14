import React, { FC } from 'react';
import { IndigitousUserType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import IndigitousUserItem from '../Item';

interface Props {
  loading: boolean;
  users: IndigitousUserType[];
}

const List: FC<Props> = ({ loading, users }) => (
  <SearchableList loading={loading} itemType="Indigitous Users" items={users} element={IndigitousUserItem} />
);

export default List;
