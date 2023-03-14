import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {  List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import {  Link, Route, Routes} from "react-router-dom";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SignUp from '../Sign-up/Signup';
import Login from '../Login/Login';
import Getallbooks from '../Books/Getallbooks';
import Addbook from '../Books/Addbook';
import Addsale from '../Sales/Addsale';
import Getallsales from '../Sales/Getallsales';
import Updatebook from '../Books/Updatebook';
import ManIcon from '@mui/icons-material/Man';
import Getallclient from '../Client/Getallclient';
import Addclient from '../Client/Addclient';
import MenuIcon from '@mui/icons-material/Menu';
//import NotificationsIcon from '@mui/icons-material/Notifications';
import Addcustomers from '../Customers/Addcustomers';
import Getallcustomers from '../Customers/Getallcustomers';
import UpdateCustomer from '../Customers/UpdateCustomer'
import Purchasebook from '../Books/Purchasebook';
import ShopIcon from '@mui/icons-material/Shop';
//import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Placeorder from '../Books/Placeorder';
import { Button } from 'react-bootstrap';
//import { useDispatch } from "react-redux";
//import { setLogout } from "../Store/Actions/Loginaction";
// import Getallbooks from '../Books/Getallbooks';
// import Login from '../Login/Login';
// import App from '../App';
//import Getallbooks from '../Books/Getallbooks';

const drawerWidth = 240;

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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();
export default function Home() {
  const [open, setOpen] = React.useState(true);
  // const [anchor,setAnchor]=React.useState(null);
  // const nav = useNavigate();
  // const dispatch = useDispatch();
  const toggleDrawer = () => {
    setOpen(!open);
  };
  // const handleClose = () => {
  //   setAnchor(null);
  // };
  // const logout = () => {
  //   handleClose();
  //   dispatch(setLogout());
  //   localStorage.removeItem("isLoggedin");
  //   localStorage.removeItem("loggedUser");
  //   nav("/login");
  // };



  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>

            <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Product Gallery
            </Typography>
            <IconButton color="inherit">
            <Button>logout</Button>
              {/* <Button onClick={logout}>logout</Button> */}
            {/* //<h6>logout</h6> */}
              {/* <Badge badgeContent={4} color="secondary"> */}
              {/* <Badge color="secondary">
                <NotificationsIcon />
              </Badge> */}
              {/* <div className='cart'>
              <Badge color="secondary">
              <AddShoppingCartIcon/>
              </Badge> */}
              {/* <span>{cart.size}</span> */}
              {/* </div> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />          
          <List component="nav">
                <Link style={{textDecoration:"none",color:"black"}} to='/getallbooks'>
                  <ListItemButton>
                    <ListItemIcon>
                      < BookIcon />
                    </ListItemIcon>
                    <ListItemText primary="Book List" />
                  </ListItemButton>
                </Link>

                <Link style={{textDecoration:"none",color:"black"}} to="/addbook">
                  
                  <ListItemButton>
                    <ListItemIcon>
                      <AddBoxOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Book" />
                  </ListItemButton>
                </Link>
                <Link style={{textDecoration:"none",color:"black"}} to="/purchase">
                  
                  <ListItemButton>
                    <ListItemIcon>
                      <ShopIcon />
                    </ListItemIcon>
                    <ListItemText primary="Shop Books" />
                  </ListItemButton>
                </Link>

                <Link style={{textDecoration:"none",color:"black"}} to="/saleslist">
                  <ListItemButton>
                    <ListItemIcon>
                    <ListOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sales List" />
                  </ListItemButton>
                </Link>
                <Link style={{textDecoration:"none",color:"black"}} to="/addsale">
                  <ListItemButton>
                    <ListItemIcon>
                      < AddShoppingCartOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Sale" />
                  </ListItemButton>
                </Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/clientlist">
                  <ListItemButton>
                    <ListItemIcon>
                    <ManIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Client List" />
                  </ListItemButton>
                </Link>
                <Link style={{textDecoration:"none",color:"black"}} to="/addclient">
                  <ListItemButton>
                    <ListItemIcon>
                    <AddBoxOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Client" />
                  </ListItemButton>
                  </Link>
                  <Link style={{textDecoration:"none",color:"black"}} to="/customerslist">
                  <ListItemButton>
                    <ListItemIcon>
                    <ManIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Customer List" />
                  </ListItemButton>
                </Link>

                  <Link style={{textDecoration:"none",color:"black"}} to="/addcustomer">
                  <ListItemButton>
                    <ListItemIcon>
                    <AddBoxOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Customer" />
                  </ListItemButton>
                </Link>
              </List>

            </Drawer>
        <Box style={{margin:"80px 10px"}}
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >




      {/* <Home /> */}
       <Routes>
        <Route path='/' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
         {/* <Route path='/' element={<Home/>}></Route>  */}
        <Route path='/getallbooks' element={<Getallbooks/>}></Route>
        <Route path='/addbook' element={<Addbook/>}></Route>
        <Route path='/purchase' element={<Purchasebook/>}></Route>
        <Route path='/placeorder' element={<Placeorder/>}></Route>
        <Route path='/saleslist' element={<Getallsales/>}></Route>
        <Route path='/addsale' element={<Addsale/>}></Route>
        <Route path='/edit/:index' element={<Updatebook/>}></Route>
        <Route path='/clientlist' element={<Getallclient/>}></Route>
        <Route path='/addclient' element={<Addclient/>}></Route>
        <Route path='/addcustomer' element={<Addcustomers/>}></Route>
        <Route path='/customerslist' element={<Getallcustomers/>}></Route>
        <Route path='/editcustomer/:index' element={<UpdateCustomer/>}></Route>

      </Routes>
            {/* <App/> */}
          <Toolbar />
        </Box>
      
      </Box>
    </ThemeProvider>
  );
}

