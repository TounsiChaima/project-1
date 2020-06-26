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

import TheCalendar from './components/theCalendar';
window.addEventListener('scroll', function(){
  let offset = window.pageYOffset;
 // document.getElementById('layer').style.backgroundPositionY = offset*0.7 + "px";
//document.getElementById('clubs_layer').style.backgroundPositionY = offset*0.7 + "px";
})

class App extends Component {
  state = {  }
  render() { 
    return (  
      
      
      <React.Fragment  >
    
      
      <Welcome/>
     
   <section id="clubs" >     <ClubSlider /> </section> 
           
     <section id="events" style={{marginTop:'200px'}}>    <EventsParent/> </section>
   
  
    
     
   
      <Footer/>
      </React.Fragment>
     
   
     );
  }
}
 
export default App;
