import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import React, { FC } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { GitHubRepositoryType } from '../../../../lib/types';

interface Props {
  repository: GitHubRepositoryType;
}

const GitHubRepositoryItem: FC<Props> = ({ repository: { name } }) => {
  return (
    <ListItem ContainerComponent="div">
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" href={`https://github.com/${name}`} target="_blank">
          <GoMarkGithub />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default GitHubRepositoryItem;
