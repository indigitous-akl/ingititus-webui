import { AppBar, InputBase, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Skeleton } from '@material-ui/lab';
import React, { createElement, FC, Fragment, useState } from 'react';
import ReactSearchFuse from 'react-search-fuse';

interface Props {
  loading?: boolean;
  itemType: string;
  items: any[];
  element: FC<any>;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    heading: {
      paddingTop: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    toolbar: theme.mixins.toolbar,
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  }),
);

const SearchableList: FC<Props> = ({ loading, itemType, items, element }) => {
  const classes = useStyles();
  const [filter, setFilter] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(event.target.value);
  };

  return (
    <Fragment>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {itemType}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={onChange}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      {loading ? (
        <ListItem ContainerComponent="div">
          <ListItemAvatar>
            <Skeleton variant="circle" width={40} height={40} />
          </ListItemAvatar>
          <ListItemText>
            <Skeleton height={6} width="80%" />
            <Skeleton height={6} width="40%" />
          </ListItemText>
        </ListItem>
      ) : (
        <ReactSearchFuse options={{ keys: ['name'] }} documents={items} filter={filter}>
          {results => (
            <Fragment>
              {(filter === '' ? items : results).length > 0 &&
                (filter === '' ? items : results).map(
                  item => element && createElement(element, { key: item.uid, item: item }),
                )}
              {(filter === '' ? items : results).length === 0 && (
                <div>
                  <Typography className={classes.heading} variant="h6" align="center">
                    No {itemType} Found!
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" align="center">
                    Try using other search parameters.
                  </Typography>
                </div>
              )}
            </Fragment>
          )}
        </ReactSearchFuse>
      )}
    </Fragment>
  );
};

export default SearchableList;
