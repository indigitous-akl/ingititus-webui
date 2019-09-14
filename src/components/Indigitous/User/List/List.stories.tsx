import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateIndigitousUser } from '../../../../lib/generators';
import IndigitousUserList from './List';

storiesOf('Indigitous/User/List', module)
  .add(
    'default',
    (): ReactElement => <IndigitousUserList items={new Array(45).fill(null).map(() => generateIndigitousUser())} />,
  )
  .add('empty', (): ReactElement => <IndigitousUserList items={[]} />);
