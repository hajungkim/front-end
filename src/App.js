import React from 'react';
import './App.css';
import Home from './screens/home/Home';
import OrderList from './screens/orderList/OrderList';
import Cart from './screens/cart/Cart';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
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
  searchIcon: {
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            휴게소 앱
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/orderList" component={OrderList} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Link to="/cart">
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <AddShoppingCartIcon />
            </IconButton>
            </Link>
            <Link to="/home">
              <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                <HomeIcon />
              </Fab>
            </Link>
            <div className={classes.grow} />
            <Link to="/orderList">
            <IconButton edge="end" color="inherit">
              <MenuIcon />
            </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Router>
    </div>
  );
}

export default App;
