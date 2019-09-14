import { storiesOf } from '@storybook/react';
import React, { ReactElement } from 'react';
import { generateGitHubUser } from '../../../lib/generators';
import GitHubUser from './User';

storiesOf('GitHub/User', module).add('default', (): ReactElement => <GitHubUser user={generateGitHubUser()} />);
