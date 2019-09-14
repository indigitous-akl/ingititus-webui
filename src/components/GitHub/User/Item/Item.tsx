import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { isFunction } from 'lodash/fp';
import React, { FC } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { GitHubUserType } from '../../../../lib/types';

interface Props {
  user: GitHubUserType;
  onClick?: () => void;
}

const User: FC<Props> = ({ user: { name, login }, onClick, children }) => {
  return (
    <ListItem button={isFunction(onClick) as true} onClick={onClick} ContainerComponent="div">
      {children || (
        <ListItemAvatar>
          <Avatar>{login[0]}</Avatar>
        </ListItemAvatar>
      )}
      <ListItemText primary={name} secondary={login} />
      <ListItemSecondaryAction>
        <IconButton edge="end" href={`https://github.com/${login}`} target="_blank">
          <GoMarkGithub />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default User;
