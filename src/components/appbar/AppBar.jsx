import * as React from 'react';
import './appbar.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RestoreIcon from '@material-ui/icons/Restore';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import AlarmIcon from '@material-ui/icons/Alarm';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom';
import '../sidebar/sidebar.css';
import '../topbar/topbar.css';
import Home from '../../pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from '../../pages/userList/UserList';
import User from '../../pages/user/User';
import NewUser from '../../pages/newUser/NewUser';
import ProductList from '../../pages/productList/ProductList';
import Product from '../../pages/product/Product';
import NewProduct from '../../pages/newProduct/NewProduct';
import Saveproducts from '../../pages/Saveproducts/Saveproducts';
import Profile from '../../pages/Profile/Profile';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import Edit from '../../pages/Edit/Edit';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: 'rgb(29, 192, 192)' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className="topLeft">
            <Typography variant="h6" noWrap component="div">
              Admin Dashbord
            </Typography>
          </div>
          <div className="topRight">
            {/* <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div> */}
            <div class="dropdown">
              <button class="dropbtn">
                <NotificationsNone />
              </button>
              <div class="dropdown-content">
                <a href="#">Notifications</a>
                <span className="topIconBadge">2</span>
              </div>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <div class="dropdown">
              <button class="dropbtn">InventoryIncharge</button>
              <div class="dropdown-content">
                <a href="/profile">Profile</a>
                {/* <Link to="/profile" className="a">
                Profile
              </Link> */}
                <a href="/">LogOut</a>
                {/* <Link to="/" className="a">
                Logout
              </Link> */}
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              {/* <h3 className="sidebarTitle">Dashboard</h3> */}
              <ul className="sidebarList">
                <Link to="/home" className="link">
                  <li className="sidebarListItem active">
                    <HomeIcon className="sidebarIcon" />
                    &nbsp;&nbsp;&nbsp; Home
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              {/* <h3 className="sidebarTitle">Quick Menu</h3> */}
              <ul className="sidebarList">
                <Link to="/newUser" className="link">
                  <li className="sidebarListItem">
                    <ListAltIcon className="sidebarIcon" />
                    &nbsp;&nbsp;&nbsp; CreateOrders
                  </li>
                </Link>
                <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <SaveIcon className="sidebarIcon" />
                    &nbsp;&nbsp;&nbsp; SavedOrders
                  </li>
                </Link>
                <Link to="/products" className="link">
                  <li className="sidebarListItem">
                    <RestoreIcon className="sidebarIcon" />
                    &nbsp;&nbsp;&nbsp; ActiveOrders
                  </li>
                </Link>
                <Link to="/saveproducts" className="link">
                  <li className="sidebarListItem">
                    <FastRewindIcon className="sidebarIcon" />
                    &nbsp;&nbsp;&nbsp; PreviewsOrders
                  </li>
                </Link>
                <Link to="/newproduct" className="link">
                  <li className="sidebarListItem">
                    <AlarmIcon className="sidebarIcon" />
                    &nbsp;&nbsp;&nbsp; Set Reminders
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:Id">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/saveproducts">
            <Saveproducts />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
