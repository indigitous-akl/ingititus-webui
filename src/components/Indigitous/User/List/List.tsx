import React, { FC } from 'react';
import { IndigitousUserType } from '../../../../lib/types';
import SearchableList from '../../../SearchableList';
import IndigitousUserItem from '../Item';

interface Props {
  loading?: boolean;
  items: IndigitousUserType[];
}

const List: FC<Props> = ({ loading, items }) => (
  <SearchableList loading={loading} itemType="Indigitous Users" items={items} element={IndigitousUserItem} />
);

export default List;
