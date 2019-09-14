import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateGitHubUser } from '../../../../lib/generators';
import GitHubUserList from './List';

storiesOf('GitHub/User/List', module)
  .add(
    'default',
    (): ReactElement => <GitHubUserList items={new Array(45).fill(null).map(() => generateGitHubUser())} />,
  )
  .add('empty', (): ReactElement => <GitHubUserList items={[]} />);
