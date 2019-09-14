import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateIndigitousUser } from '../../../../lib/generators';
import IndigitousUserItem from './Item';

storiesOf('Indigitous/User/Item', module).add(
  'default',
  (): ReactElement => <IndigitousUserItem item={generateIndigitousUser()} />,
);
