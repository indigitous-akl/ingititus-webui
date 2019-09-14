import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/Face';
import LanguageIcon from '@material-ui/icons/Language';
import clsx from 'clsx';
import Link from 'next/link';
import React, { FC } from 'react';
import { GoRepo } from 'react-icons/go';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
    brand: {
      display: 'grid',
      alignItems: 'center',
      padding: theme.spacing(2),
    },
    brandImage: {
      width: '100%',
    },
  }),
);

const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={clsx([classes.toolbar, classes.brand])}>
          <img src="/static/logo.png" className={classes.brandImage} />
        </div>
        <Divider />
        <List>
          <Link href="/">
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List subheader={<ListSubheader component="div">Indigitous</ListSubheader>}>
          <Link href="/indigitous/users">
            <ListItem button>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List subheader={<ListSubheader component="div">GitHub</ListSubheader>}>
          <Link href="/github/users">
            <ListItem button>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
          <Link href="/github/languages">
            <ListItem button>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Languages" />
            </ListItem>
          </Link>
          <Link href="/github/repositories">
            <ListItem button>
              <ListItemIcon>
                <GoRepo className="MuiSvgIcon-root" />
              </ListItemIcon>
              <ListItemText primary="Repositories" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default Layout;
