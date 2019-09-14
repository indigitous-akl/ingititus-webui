import { createElement, FC, useEffect, useState } from 'react';
import g from '../../lib/client';
import { BaseType } from '../../lib/types';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: FC<any>;
  type: string;
}

const Users: FC<Props> = ({ element, type }) => {
  const [items, setItems] = useState([] as BaseType[]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (): Promise<void> => {
    const response = await g()
      .V()
      .hasLabel(type)
      .valueMap()
      .toList();
    const items = response.map(remoteItem => {
      let item = {};
      remoteItem.toJSON().forEach(([key, value]) => {
        item[key] = value[0];
      });
      return item as BaseType;
    });
    setItems(items);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return createElement(element, { loading: loading, items: items });
};

export default Users;
