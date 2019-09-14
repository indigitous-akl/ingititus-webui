import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Radio,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC, Fragment, useState } from 'react';
import { IndigitousUserType } from '../../../lib/types';
import GitHubUser from '../../GitHub/User/Item';

interface Props {
  user: IndigitousUserType;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    card: {
      marginBottom: theme.spacing(3),
    },
  }),
);

const User: FC<Props> = ({ user: { name, email, is, mightBe } }) => {
  const classes = useStyles();
  const [checkedId, setCheckedId] = useState('');

  const toggleCheckedId = (id): void => {
    if (checkedId === id) {
      setCheckedId('');
    } else {
      setCheckedId(id);
    }
  };
  return (
    <Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={email} />
      </ListItem>
      {is && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="subtitle1">GitHub User</Typography>
          </CardContent>
          <GitHubUser user={is}></GitHubUser>
        </Card>
      )}
      {mightBe.length > 0 && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="subtitle1">Potential GitHub User Matches</Typography>
          </CardContent>
          <List>
            {mightBe.map(user => (
              <GitHubUser key={user.id} user={user} onClick={() => toggleCheckedId(user.id)}>
                <ListItemIcon>
                  <Radio edge="end" onChange={() => toggleCheckedId(user.id)} checked={user.id === checkedId} />
                </ListItemIcon>
              </GitHubUser>
            ))}
          </List>
          <CardActions>
            <Button variant="contained" color="primary" className={classes.button} disabled={checkedId === ''}>
              Save
            </Button>
          </CardActions>
        </Card>
      )}
    </Fragment>
  );
};

export default User;
