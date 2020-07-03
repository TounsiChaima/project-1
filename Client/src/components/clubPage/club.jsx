import React from 'react';

import img from './assets/rafaapro.png';
import '../styling.css';
import './App.css';

import AboutUs from './aboutus';
import PastEvents from './pastevents';
import Upcoming from './upcoming';
import Team from './team';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Feedback from './feedback.component';
import Footer from '../footer';

import EditForm from './editForm';

export default class Club extends React.Component {
  state = {  }
   
  

  render() {

  

  return (
  
    
    <div className="App">
    
 
<Sidebar  />


      <header className="masthead">

  
  
    
  <div 
  style={{ height:'150vh',backgroundImage:`url(${img})`,backgroundSize:'contain', backgroundRepeat:'no-repeat'}}>
    <h1 style={{paddingTop:'20%' , color:'white'}} >Welcome To {this.props.title} </h1>

    <h2 style={{color:'white'}}>Be Part of our family</h2>
  
    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">
      Tell Me More</a>
  </div>
  
</header> 




  <div style={{paddingTop:'10%'}}>         
      <AboutUs/></div>


 
      <div className='j2' style={{paddingTop:'10%'}}>         
      <Upcoming/></div>
  
    
      <div className='j2' style={{paddingTop:'10%'}}>         
      <PastEvents/></div>

   

      <div className='j2' style={{paddingTop:'10%'}}>         
      <Team/></div>


   
      <div className='j2'><Feedback/> </div>
    
      <div className='j2'><Footer/> </div>

      
      
  

    </div>
  );
}

}
