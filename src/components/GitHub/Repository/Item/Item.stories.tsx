import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateGitHubRepository } from '../../../../lib/generators';
import GitHubRepositoryItem from './Item';

storiesOf('GitHub/Repository/Item', module).add(
  'default',
  (): ReactElement => <GitHubRepositoryItem repository={generateGitHubRepository()} />,
);
