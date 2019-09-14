import {
  Avatar,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC, Fragment } from 'react';
import { GitHubUserType } from '../../../lib/types';
import GitHubLanguageItem from '../Language/Item';
import GitHubRepositoryItem from '../Repository/Item';

interface Props {
  user: GitHubUserType;
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

const User: FC<Props> = ({ user: { name, login, repositories, languages } }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar>{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={login} />
      </ListItem>
      {repositories.length > 0 && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="subtitle1">Repositories</Typography>
          </CardContent>
          <Divider />
          <List>
            {repositories.map(repository => (
              <GitHubRepositoryItem key={repository.id} repository={repository} />
            ))}
          </List>
        </Card>
      )}
      {languages.length > 0 && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="subtitle1">Languages</Typography>
          </CardContent>
          <Divider />
          <List>
            {languages.map(language => (
              <GitHubLanguageItem key={language.id} language={language} />
            ))}
          </List>
        </Card>
      )}
    </Fragment>
  );
};

export default User;
