
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from 'react'

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import DashboardIcon from '@material-ui/icons/Dashboard';
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import "bootstrap/dist/js/bootstrap.min.js";
import ProfileSection from './profileSection';
import SettingsIcon from "@material-ui/icons/Settings";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import HomeIcon from "@material-ui/icons/Home";
import Dashboard from './dashboard';
//import Homepage from './homepage';
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const drawerWidth = 240;

/*const routes = [
    {
        path: "/homepage",
         exact: true,
         sidebar: () => "" ,
         main: () => <Dashboard/>
       },
       {
         path: "/Dashboard",
         sidebar: () => "" ,
         main: () => <Dashboard/>,
       
       },
       {
         path: "/manage events",
         sidebar: () => "",
         main: () => ""
       },
       
       {
         path: "/profile settings",
         sidebar: () => "",
         main: () => ""
       },
       
       {
         path: "/logout",
         sidebar: () => "",
         main: () => ""
       }
]*/
const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  }));
  

  
  export default  function Sidebar() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const [show, setShow] = React.useState(false);
  
    const handleClickOpen = () => {
      setShow(true);
    };
  
    const handleClose = () => {
      setShow(false);
    };



  return(
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed"  style={{ background: 'transparent', boxShadow: 'none'}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
        
<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
    <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Bright Insat</a>
      
      <button className="navbar-toggler collapseOnSelect navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#upcoming">Upcoming Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#pastevents">Past Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Sponsors & Partners</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Feedbacks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </Toolbar>
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '40%',
        background: '#f0f0f0'
      }}>
        <List>
<ListItem className = "draweritem" button key="Homepage">
      <ListItemIcon style={{ marginLeft: "1rem" }} >
        <HomeIcon/>
      </ListItemIcon>
      <Link to="/homepage">Home Page</Link>
    </ListItem>
 <ListItem className = "draweritem" button key="Dashboard">
      <ListItemIcon style={{ marginLeft: "1rem" }} >
        <DashboardIcon /> 
      </ListItemIcon>
      <Link to="/dashboard">Dashboard</Link>
    </ListItem>
    <ListItem className = "draweritem"  button key="Mnage Events">
              <ListItemIcon style={{ marginLeft: "1rem" }}>
                <SportsEsportsIcon />
              </ListItemIcon>
              <Link to="/manage events">Manage Events</Link>
            </ListItem>
            <ListItem className = "draweritem"  button key="Profile Settings">
              <ListItemIcon style={{ marginLeft: "1rem" }}>
                <SettingsIcon />
              </ListItemIcon>
              <Link to="/profile settings">Profile Settings</Link>
            </ListItem>
      <Divider/>
            <ListItem className = "draweritem"  button key="Logout">
              <ListItemIcon style={{ marginLeft: "1rem" }}>
              <ExitToAppIcon/>
              </ListItemIcon>
              <Link to="/logout">Logout</Link>
            </ListItem>
           
          <div style={{ flex: 1, padding: "10px" }}>
        
        </div>
        </List>
      </div>
      <div style={{ flex: 1, padding: '10px' }}>
      
      </div>
    </div>
  </Router>
  </AppBar>    

</div>
);
    }
