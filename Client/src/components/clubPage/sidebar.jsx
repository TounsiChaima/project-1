import React from "react";
import Dialog from 'react-bootstrap-dialog';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import "bootstrap/dist/js/bootstrap.min.js";
import ProfileSection from './profileSection';
import SettingsIcon from "@material-ui/icons/Settings";
import RenderBody from '../renderBody';
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import InfoIcon from '@material-ui/icons/Info';

import HomeIcon from "@material-ui/icons/Home";

import Dashboard from './dashboard';
const drawerWidth = 240;

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

export default function PersistentDrawerLeft({routes}) {
  const classes = useStyles();
  const theme = useTheme();
  let addModalChangeShow= false;
  let addModalShow= false;
  let modal= false;
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
  
  let handleClick=(eventClickInfo)=>{
        
    this.dialog.show({
       // title:" title",
        body: 'You want to add an event ?',
     
       
        actions: [
          Dialog.CancelAction(),
         
          Dialog.DefaultAction(
            'Yes',
            () => {
              this.setState({addModalShow:true})},
            'btn-primary'
          )
        ],
        bsSize: 'small',
        onHide: (dialog) => {
          dialog.hide()
          console.log('closed by clicking background.')
        }
      })

  }

  let addModalClose =()=>{
   addModalShow=false;
  }
  return (
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
      </AppBar>
       
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      
      >
        <div className={classes.drawerHeader}   style={{
          backgroundColor:'red !important'
        }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <ProfileSection />
        <br/>
        <div className="profile-section-label">Your club section</div>
        <br/>
        <Divider /> 

        <List>
       

         <ListItem className = "draweritem" button key="Dashboard" >
              <ListItemIcon style={{ marginLeft: "1rem" }} >
                <HomeIcon />
              </ListItemIcon>
              <Link to="/dashboard">Dashboard</Link>       
            </ListItem>
      
        
            <ListItem className = "draweritem"  button key="My Games">
              <ListItemIcon style={{ marginLeft: "1rem" }}>
                <SportsEsportsIcon />
              </ListItemIcon>
              <Link to="/manageEvents">Manage Events</Link>  
            </ListItem>
      
        
            <ListItem className = "draweritem"  button key="Settings">
              <ListItemIcon style={{ marginLeft: "1rem" }}>
                <SettingsIcon />
              </ListItemIcon>
              <span> Settings</span>
            </ListItem>
            <ListItem className = "draweritem"  button key="Settings">
              <ListItemIcon style={{ marginLeft: "1rem" }}>
                <SettingsIcon />
              </ListItemIcon>
              <Link to="/editProfile" >Edit Profile</Link>  
            </ListItem>
        
           
      
      <Divider/>
            <ListItem className = "draweritem"  button key="FAQ's">
              <ListItemIcon style={{ marginLeft: "1rem" }}>
                <InfoIcon />
              </ListItemIcon>
              <span> Logout</span>

            </ListItem>
     
        </List>

        
      </Drawer>
    </div>
  );
}
