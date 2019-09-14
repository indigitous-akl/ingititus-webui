import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC, Fragment } from 'react';
import { UndrawCoding } from 'react-undraw';
import { GitHubUserType } from '../../../../lib/types';
import GitHubUserItem from '../Item';

interface Props {
  users: GitHubUserType[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      paddingTop: theme.spacing(2),
    },
  }),
);

const List: FC<Props> = ({ users }) => {
  const classes = useStyles();

  return (
    <Fragment>
      {users.length > 0 && users.map(user => <GitHubUserItem key={user.id} user={user}></GitHubUserItem>)}
      {users.length === 0 && (
        <div>
          <UndrawCoding />
          <Typography className={classes.heading} variant="h6" align="center">
            No GitHub Users Found!
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" align="center">
            Try using other search parameters.
          </Typography>
        </div>
      )}
    </Fragment>
  );
};

export default List;
