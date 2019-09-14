import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import LanguageIcon from '@material-ui/icons/Language';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Link from 'next/link';
import React, { FC } from 'react';
import { GoRepo } from 'react-icons/go';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
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
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
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
