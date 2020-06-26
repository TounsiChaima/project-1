import img2 from '../assets/ins.jpg';
import img1 from '../assets/insaat.png';
//import img3 from '../assets/inss.png';
import img3 from '../assets/insss.png';
import TypistLoop from 'react-typist-loop';
import React,{Component} from "react";
import "./styling.css";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import SearchPage from './searchpage';

import Typical from 'react-typical';
const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

class Slides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  
 
  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(1);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    const {children, timeout, ...props} = this.props;
    return (
  
      <React.Fragment>
  
   
         
              
              
              <div className='row'style={{ height: "100vh" }}>
                <img id="insat"
                 className="d-block w-100 roott" style={{ width: "100%", height: "100%" }}
                  src={img3}
                />
                 <div className=" carousel-caption" id="welcome"
                style={{ position: 'absolute' 
                  ,left:'0',
                  width:' 50%',
                   top: '25%',
                   marginLeft: '15%'
                   ,color:	'#faf8e6'}}>
                      
                      
                      
                      <h1> RENCONTREZ BRIGHT INSAT</h1>
                       
                      <h2><Typical loop={Infinity} wrapper ='b' steps={[ 'Une initiative par les étudiants..' ,1000,'Une initiative pour les étudiants ! ',1000]}/>
                       </h2>
               
                 <SearchPage />
                </div>
              
               
              </div>
                
                
  </React.Fragment>)
    
}
}
export default Slides;
