import { Collapse, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { FC, Fragment, useState } from 'react';
import { GitHubLanguageType } from '../../../../lib/types';
import GitHubUserItem from '../../User/Item';

interface Props {
  item: GitHubLanguageType;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

const GitHubLanguageItem: FC<Props> = ({ item: { name, users } }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <ListItem ContainerComponent="div" button onClick={handleClick}>
        <ListItemText primary={name} secondary={users.length > 0 && `${users.length} developers`} />
        {users.length > 0 && (
          <ListItemSecondaryAction>{open ? <ExpandLess /> : <ExpandMore />}</ListItemSecondaryAction>
        )}
      </ListItem>
      {users.length > 0 && (
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

export default GitHubLanguageItem;
