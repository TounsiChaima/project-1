import React, { Component } from 'react';
import '../components/styling.css';
import gauche from '../assets/gauche.png';
import droite from '../assets/droite.png';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';


class Slider2 extends Component {
  state={
  first :'',
  sec:'',
  third:'',
  mylist:[]
  }

  render() {
    const {list}=this.props;
    
    const length=list.length;
    var list_bloc =list.slice(1, 3);
    
    var i = 1;
    var interval = 3000;
    var one = list_bloc[0];

    
 function previousSlide (){
  if(i<2){ i =length-1}
   i=i-2;
   sliding();
   //clearInterval(animation);
   //animation = setInterval(sliding,interval);
 }

 function nextSlide (){
  console.log('clicked');
   sliding();
   //clearInterval(animation);
   //animation = setInterval(sliding,interval);
  }
 
 
 var sliding = function(){
    if (i<length-3){
    list_bloc = list.slice(i, i+3);
    i = i+1}
    else{
      let d = 3-(length -i );
      list_bloc = list.slice (i, length) ;  
      i=0;
      list_bloc = list_bloc.concat(list.slice(i, d));
      i=d;
    }
    one=list_bloc[0];
   var myNodeList = document.querySelectorAll('.slideCol');// returns NodeList
   var mySecNodeList = document.querySelectorAll('.learn');// returns NodeList
   var div_array = [...myNodeList]; // converts NodeList to Array
   var link_array = [...mySecNodeList]; // converts NodeList to Array
   div_array.forEach(switching);
   function switching(item, index){

let myimg = list_bloc[index].image;

      item.style.background = `url(${myimg})`;
   }
   
  
   
   
   link_array.forEach(switchingSec);
   function switchingSec(item, index){
     
let mytitle = list_bloc[index].title;

 item.href = "http://localhost:3000/"+ mytitle;
    
      }
  
    
 
  };
 
 //var animation = setInterval(sliding,interval);
 
  
 
 

    return (
      <React.Fragment>
        <BrowserRouter>
<div className="row"  style={{ height:'50vh', marginTop:'80px',marginBottom:'50px'}} id='sliders'>
      <div className='col-md-1 arrowIcon' ><img src={gauche}  onClick= {previousSlide}  /></div>
       <div className='col-md-3 slideCol' id='club_1' style={{backgroundImage:'url('+list[0].image+')'}} >
           <div className="overlay">
             <div className='overlaycontent'>
            
             <li className="nav-item learn_btn btn btn-light ml-3 " >
          
           
              <Link className='learn' to={"/"+list_bloc[0].title} >
            
              Learn More
               </Link>
           
           </li>
             
             
             </div>
           </div>
       </div>
       <div className='col-md-3 slideCol' id='club_2' style={{backgroundImage:'url('+list[1].image+')'}}>
         <div className="overlay">
             <div className='overlaycontent'>
             <li className="nav-item learn_btn btn btn-light ml-3 " >
          
           
              <Link className='learn' to={"/"+list[1].title} >
            
              Learn More
               </Link>
           
           </li>
           </div>
           </div>
         </div>
       <div className='col-md-3 slideCol' id='club_3' style={{backgroundImage:'url('+list[2].image+')'}}>
         <div className="overlay">
             <div className='overlaycontent'>
             <li className="nav-item learn_btn btn btn-light ml-3 " >
          
           
              <Link className='learn' to={"/"+list[2].title} >
            
              Learn More
               </Link>
           
           </li>
            </div>
           </div>
         </div>
       <div className='col-md-1 arrowIcon' ><img src={droite} onClick= {nextSlide}/></div>
       </div>
      
                   
        
       </BrowserRouter>
      
 
      </React.Fragment>
    )}}
 export default Slider2;