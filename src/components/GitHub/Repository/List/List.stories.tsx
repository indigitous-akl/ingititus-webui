import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateGitHubRepository } from '../../../../lib/generators';
import GitHubRepositoryList from './List';

storiesOf('GitHub/Repository/List', module)
  .add(
    'default',
    (): ReactElement => <GitHubRepositoryList items={new Array(45).fill(null).map(() => generateGitHubRepository())} />,
  )
  .add('empty', (): ReactElement => <GitHubRepositoryList items={[]} />);
