import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './index.css';
import './components/styling.css';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Event from './components/eventPage/event';
import Club from './components/clubPage/club';
import Dashboard from './components/clubPage/dashboard';
import axios from 'axios';
import App from './App';
import Editing from './components/clubPage/editing';
import {getClubs} from "./datafolder/clubData";
import TheCalendar from './components/theCalendar';

const clubs = getClubs();
let eventsDB = [];
axios.get('http://localhost:5000/events/')
.then(response=>{
  let events= response.data;
 const eventsDB= events;
  eventsDB.map(event=>{
    
     let str =event.image.split("\\").join("/");
     event.image = str;
     let str1 = str.substring(29);
     let str2 = str.substring(0,21);
     event.image = str2+str1;
     console.log(eventsDB);
    
   
})})
.catch(function(error){console.log(error)});



const routes = (
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/SignIn" component={SignInForm}/>
      <Route exact path="/SignUp" component={SignUpForm}/>
      <Route exact path="/Dashboard" component={Dashboard}/>
   

      <Route exact path="/manageEvents" component={TheCalendar}/>
      <Route exact path="/editProfile" component={Editing}/>
      {
      eventsDB.map(event=>{
                  console.log("event in map"+event);
              return (<Route exact path={"/"+event.title}
                 component={() => <Event title={event.title} 
                 image= {event.image} 
                  />}/>)
               }
                ),
      clubs.map(club=>{
        console.log("club in map"+club);
       return (<Route exact path={"/"+club.title}
       component={() => <Club title={club.title} image= {club.image} />}/>)
            }
                )}
     
     

            
      </Switch>
    
);

export default routes;