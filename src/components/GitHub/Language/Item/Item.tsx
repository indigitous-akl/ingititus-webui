import { ListItem, ListItemText } from '@material-ui/core';
import React, { FC } from 'react';
import { GitHubLanguageType } from '../../../../lib/types';

interface Props {
  language: GitHubLanguageType;
}

const GitHubLanguageItem: FC<Props> = ({ language: { name } }) => {
  return (
    <ListItem ContainerComponent="div">
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default GitHubLanguageItem;
