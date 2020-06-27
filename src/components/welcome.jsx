import React, { Component , useEffect} from 'react';
import events from '../assets/event.png';
import img2 from '../assets/blured.png';
import _1 from '../assets/1.jpg';
import _2 from '../assets/2.jpg';
import _3 from '../assets/3.jpg';
import _4 from '../assets/4.jpg';
import _5 from '../assets/5.jpg';
import _6 from '../assets/6.jpg';
import _7 from '../assets/7.jpg';
import _8 from '../assets/8.jpg';
import _9 from '../assets/9.jpg';
import _10 from '../assets/10.jpg';
import network from  '../assets/worldd.png';
import Navbar from './navbar';
import Slides from './slides';
import eventIcon from '../assets/eventicon.png';
import users from '../assets/users.png';
import sponsors from '../assets/sponsors.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from '../common/slider';
import CountUp from 'react-countup';
import TheCalendar from './theCalendar';
import ClubSlider from './clubSlider';
const parallax = document.getElementById('firstparallax');
const Welcome = () => {
  

    useEffect(()=>{
        Aos.init({duration:4000});
    },[]);
var all_images=[_1,_2, _3, _4,_5,_6,_7,_8,_9,_10];
var images =[];
var i = 0 ;
var length = all_images.length;

setInterval(function(){
  if (i<length-3){
  images = all_images.slice(i, i+3);
  i = i+3}
  else{
    let d = 3-(length -i );
    images = all_images.slice (i, length) ;
    
    i=0;
    images = images.concat(all_images.slice(i, d));
    i=d;
    

  }
  let image1 = document.getElementById('1');
  let image2 = document.getElementById('2');
  let image3 = document.getElementById('3');
  image1.src=images[0];
  image2.src=images[1];
  image3.src=images[2];
 // console.log(mydiv.style.width);
},5000)

var settings={

}

/*(function display(){
  let bloc = 3;
  if (i < all_images.length - 3) {
    images = all_images.slice (i, i+bloc);
    i=i+3;
     // call myself in 3 seconds time if required

}
setInterval(display, 5000); 
//console.log(i);
images = all_images.slice (i, all_images.length);
i=0;
//console.log(images);
})();
  */  return (
        <React.Fragment>
      
        <Navbar className="ab"  style={{position: 'absolute'}}/>
 
    
          
          
<Slides className="root sliderr" id='theone'style=
{{ position: 'relative',minHeight: '100vh' }} />
    
   
      
      
    

      <section id='about'  > 
           

        
          
          <div  id='thisid'className="row"style={{ paddingRight:'0',
            backgroundColor:'white',  paddingTop:"10%"
           }} >
          
          
           <div 
              
              className="aboutsection col-md-7" style={{paddingLeft:'4%'}} >
                <h1 style={{ paddingRight:'4%'}}>
                Bright INSAT, at a glance ..
                </h1>
                <p  >
                A communication bridge between INSAT clubs and students. 
                 <br/> We aim to help clubs expose their events easily to students, who won't feel sad about skipping 
                 an event that interest them anymore !
                </p>
 
            </div>
          
          <div className='col-md-5' style={{textAlign:'center'}}>
              <img className ='aboutCalendar'src={events} style={{maxHeight:'60vh', paddingBottom:'20%'}}></img>
          </div>
          <hr style={{width:'50%'}}/>

          </div>
              
              
              
          <div className='row ' style={{backgroundColor:'white', height:'60vh'}}>
         
<div className='col-md-4 service'>
<div className='content'>
<span className="input-group-addon">
                   <img src={users}></img>
                   </span>
  <h3>Network</h3>
  <h5>+<CountUp end='3000'/> Student</h5>
  <p>We'll provide you with great networking opportunities, through participating and attending multiple events.</p>
</div>
</div>
<div className='col-md-4 service'>
<div className='content'>
<span className="input-group-addon">
                   <img src={eventIcon}></img>
                   </span>
  <h3>Calendar</h3>
  <h5>+<CountUp end='100'/> Event</h5>
  <p>Our detailed calendar with all the upcoming events will make your life so much easier ! 
    <br/>Forgetting about the dates? <br/>NOT ANYMORE!  </p>
</div>
</div>
<div className='col-md-4 service'>
<div className='content'>
<span className="input-group-addon">
                   <img src={sponsors}></img>
                   </span>
                   
  <h3>Partnership</h3>
  <h5>+<CountUp end='50'/> Company</h5>
  
  <p>Thanks to our partnerships, you can get in touch with several companies which will absolutely help you in your professional experience.</p>
</div>
</div>
</div>
           
           
           <div className='row'style={{ backgroundColor:'white'}} >
           
           <div className="parallax" id='firstparallax' style={{backgroundImage:`url(${img2})`,backgroundAttachment:'fixed',
            backgroundSize:'cover',textAlign:'center', maxHeight:'80vh', position:'relative'}}>
                 
                 <div  id='layer'  >
                <div
                 data-aos="fade-right"
                 data-aos-offset="200"
                 data-aos-delay="0"
                 data-aos-duration="800"
                 data-aos-mirror="true"
                 data-aos-once="true"
                 data-aos-anchor-placement="top-center"
                className='memoriesdiv'>
               <h1 >Let's create some memories</h1>
               </div>
               <div className='row layer_row' >
                      <div 
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-delay="0"
                      data-aos-duration="300"
                      data-aos-mirror="true"
                      data-aos-once="true"
                      data-aos-anchor-placement="top-center"
                      className='jumbotron col-md-3 layerclass'>
                      <img id='1' className="insat_images " src={_1}/>
                      </div>   
                      <div 
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-delay="0"
                      data-aos-duration="350"
                      data-aos-mirror="true"
                      data-aos-once="true"
                      data-aos-anchor-placement="top-center"
                    
                      className='jumbotron col-md-3 layerclass'>
                      <img id='2' className="insat_images " src={_2}/>
                      </div>   
                      <div 
                      data-aos="zoom-in"
                      data-aos-offset="100"
                      data-aos-delay="0"
                      data-aos-duration="400"
                      data-aos-mirror="true"
                      data-aos-once="true"
                      data-aos-anchor-placement="top-center"
                      className='jumbotron col-md-3 layerclass'>
                      <img id='3' className="insat_images " src={_3}/>
                      </div>   
                      </div>
                   
                    
  
   </div></div>

           

   
           </div>
           </section> 
      </React.Fragment>
      );
}
 
export default Welcome;