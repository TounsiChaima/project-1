import gauche from '../assets/gauche.png';
import droite from '../assets/droite.png';
import img2 from '../assets/bright_insat.png';
import {getClubs} from "../datafolder/clubData";
import {getEvents} from "../eventData";
import './styling.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React,{Component, useState,useEffect} from "react";
import "./styling.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Slider from '../common/slider';

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class ClubSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clubs:getClubs(),
        events: getEvents()
    };
  }

 
  render() {
    let {clubs, events}=this.state;
   
    

    return (

        <React.Fragment>     
   
       
         <Slider list={clubs}/>
             
  </React.Fragment>
)

  
 

    
}
}
export default ClubSlider;
