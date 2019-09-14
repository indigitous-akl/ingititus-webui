import {
  Avatar,
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { FC, Fragment } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { GitHubUserType } from '../../../lib/types';
import GitHubLanguageItem from '../Language/Item';
import GitHubRepositoryItem from '../Repository/Item';

interface Props {
  item: GitHubUserType;
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

const User: FC<Props> = ({ item: { name, login, repositories, languages } }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <ListItem ContainerComponent="div">
        <ListItemAvatar>
          <Avatar>{name[0]}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={login} />
        <ListItemSecondaryAction>
          <IconButton edge="end" href={`https://github.com/${login}`} target="_blank">
            <GoMarkGithub />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      {repositories && repositories.length > 0 && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="subtitle1">Repositories</Typography>
          </CardContent>
          <Divider />
          <List>
            {repositories.map(repository => (
              <GitHubRepositoryItem key={repository.uid} item={repository} />
            ))}
          </List>
        </Card>
      )}
      {languages && languages.length > 0 && (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="subtitle1">Languages</Typography>
          </CardContent>
          <Divider />
          <List>
            {languages.map(language => (
              <GitHubLanguageItem key={language.uid} item={language} />
            ))}
          </List>
        </Card>
      )}
    </Fragment>
  );
};

export default User;
