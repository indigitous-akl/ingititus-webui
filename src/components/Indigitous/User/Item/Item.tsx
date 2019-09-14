import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Link from 'next/link';
import React, { FC } from 'react';
import { IndigitousUserType } from '../../../../lib/types';

interface Props {
  item: IndigitousUserType;
  onClick?: () => void;
}

const User: FC<Props> = ({ item: { id, name, email }, onClick }) => {
  return (
    <Link href="/indigitous/users/[id]" as={`/indigitous/users/${id}`}>
      <ListItem button onClick={onClick} component="a" ContainerComponent="div">
        <ListItemAvatar>
          <Avatar>{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={email} />
      </ListItem>
    </Link>
  );
};

export default User;
