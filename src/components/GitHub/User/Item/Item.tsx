import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { GitHubUserType } from '../../../../lib/types';

interface Props {
  item: GitHubUserType;
  onClick?: () => void;
}

const User: FC<Props> = ({ item: { uid, name, login }, onClick, children }) => {
  return (
    <Link href="/github/users/[uid]" as={`/github/users/${uid}`}>
      <ListItem button onClick={onClick} component="a" ContainerComponent="div">
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
    </Link>
  );
};

export default User;
