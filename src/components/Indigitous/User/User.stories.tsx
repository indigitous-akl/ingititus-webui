import { storiesOf } from '@storybook/react';
import { tap } from 'lodash/fp';
import React, { ReactElement } from 'react';
import { generateIndigitousUser } from '../../../lib/generators';
import IndigitousUser from './User';

storiesOf('Indigitous/User', module)
  .add(
    'default',
    (): ReactElement => <IndigitousUser user={tap(value => (value.mightBe = []), generateIndigitousUser())} />,
  )
  .add(
    'multiple matches',
    (): ReactElement => <IndigitousUser user={tap(value => (value.is = null), generateIndigitousUser())} />,
  );
