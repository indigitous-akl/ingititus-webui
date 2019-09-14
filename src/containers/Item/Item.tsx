import React, { createElement, FC, Fragment, useEffect, useState } from 'react';
import g from '../../lib/client';
import { BaseType } from '../../lib/types';

interface Props {
  uid: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: FC<any>;
  type: string;
}

const ItemContainer: FC<Props> = ({ uid, element, type }) => {
  const [item, setItem] = useState(({} as unknown) as BaseType);
  const [loading, setLoading] = useState(true);

  const fetchData = async (): Promise<void> => {
    const response = await g()
      .V()
      .hasLabel(type)
      .has('uid', uid)
      .valueMap()
      .toList();
    const items = response.map(remoteItem => {
      let item = {};
      remoteItem.toJSON().forEach(([key, value]) => {
        item[key] = value[0];
      });
      return item as BaseType;
    });
    setItem(items[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? <Fragment /> : createElement(element, { item: item });
};

export default ItemContainer;
