import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateGitHubLanguage } from '../../../../lib/generators';
import GitHubLanaguageList from './List';

storiesOf('GitHub/Language/List', module)
  .add(
    'default',
    (): ReactElement => (
      <GitHubLanaguageList languages={new Array(45).fill(null).map(() => generateGitHubLanguage())} />
    ),
  )
  .add('empty', (): ReactElement => <GitHubLanaguageList languages={[]} />);
