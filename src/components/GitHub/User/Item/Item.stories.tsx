import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateGitHubUser } from '../../../../lib/generators';
import GitHubUserItem from './Item';

storiesOf('GitHub/User/Item', module).add(
  'default',
  (): ReactElement => <GitHubUserItem item={generateGitHubUser()} />,
);
