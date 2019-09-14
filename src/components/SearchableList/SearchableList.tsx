import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React, { createElement, FC, Fragment } from 'react';

interface Props {
  itemType: string;
  items: any[];
  onChange?: (value: string) => void;
  element: FC<any>;
}

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
  }),
);

const SearchableList: FC<Props> = ({ itemType, items, onChange, element }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {itemType}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={event => onChange && onChange(event.target.value)}
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
      {items.length > 0 && items.map(item => element && createElement(element, { key: item.uid, item: item }))}
      {items.length === 0 && (
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
  );
};

export default SearchableList;
