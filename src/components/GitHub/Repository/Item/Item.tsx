import { Collapse, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Link from 'next/link';
import React, { FC, Fragment, useState } from 'react';
import { GitHubRepositoryType } from '../../../../lib/types';
import GitHubUserItem from '../../User/Item';

interface Props {
  item: GitHubRepositoryType;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

const GitHubRepositoryItem: FC<Props> = ({ item: { uid, name, users } }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Link href="/github/repositories/[id]" as={`/github/repositories/${uid}`}>
        <ListItem ContainerComponent="div" component="a" button>
          <ListItemText primary={name} secondary={users && users.length > 0 && `${users.length} collaborators`} />
          {users && users.length > 0 && (
            <ListItemSecondaryAction onClick={handleClick}>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemSecondaryAction>
          )}
        </ListItem>
      </Link>
      {users && users.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List className={classes.nested} component="div" disablePadding>
            {users.map(user => (
              <GitHubUserItem key={user.uid} item={user} />
            ))}
          </List>
        </Collapse>
      )}
    </Fragment>
  );
};

export default GitHubRepositoryItem;
