import React, { Component, useRef , useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import EventsParent from './components/eventsParent';
import ClubParent from './components/clubParent';
import ClubSlider from './components/clubSlider';
import Contact from './components/contact';
import Welcome from './components/welcome';
import Footer from './components/footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Login from './components/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import HomeCalendar from './components/homeCalendar';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import BrightTeam from './components/brightTeam';
window.addEventListener('scroll', function(){
  let offset = window.pageYOffset;
/* document.getElementById('layer').style.backgroundPositionY = offset*0.7 + "px";
document.getElementById('layer_contact').style.backgroundPositionY = offset*0.7 + "px";
document.getElementById('layer_calendar').style.backgroundPositionY = offset*0.7 + "px";
*/})

class App extends Component {
  state = {  }
  render() { 
    return (  
      
      <React.Fragment  >

      
      <Welcome/>
      
       
  
             
       <section id="events" >    <EventsParent/> </section>
       <HomeCalendar/>
       <section id="clubs" >     <ClubSlider /> </section> 
    
       <BrightTeam/>
       <section id="contact" > <Contact/></section>
       
        <Footer/>
  
  