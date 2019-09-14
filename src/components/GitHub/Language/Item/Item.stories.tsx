import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateGitHubLanguage } from '../../../../lib/generators';
import GitHubLanguageItem from '././Item';

storiesOf('GitHub/Language/Item', module).add(
  'default',
  (): ReactElement => <GitHubLanguageItem language={generateGitHubLanguage()} />,
);
