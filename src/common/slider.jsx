import React, { Component } from 'react';
import '../components/styling.css';
import gauche from '../assets/gauche.png';
import droite from '../assets/droite.png';

const Slider = (props) => {
 const {list}=props;
 const length=list.length;
 var list_bloc =list.slice(1, 3);
 var i = 1;
 var interval = 3000;



 function previousSlide (){
   if(i<2){ i =length-1}
    i=i-2;
    sliding();
    clearInterval(animation);
    animation = setInterval(sliding,interval);
  }

 function nextSlide (){
 console.log('clicked');
  sliding();
  clearInterval(animation);
  animation = setInterval(sliding,interval);
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

  var myNodeList = document.querySelectorAll('.slideCol');// returns NodeList
  var div_array = [...myNodeList]; // converts NodeList to Array
  div_array.forEach(switching);
  function switching(item, index){
      item.style.background = `url(${list_bloc[index].image})`;
  }
   
  
   document.getElementById('first_btn').innerHTML = `${list_bloc[0].title}`;
   document.getElementById('sec_btn').innerHTML = `${list_bloc[1].title}`;
   document.getElementById('third_btn').innerHTML = `${list_bloc[2].title}`;

 }

var animation = setInterval(sliding,interval);

 

 return (
    

     <React.Fragment>     
      <div className="row"  style={{ height:'50vh', marginTop:'80px',marginBottom:'50px'}} id='sliders'>
      <div className='col-md-1 arrowIcon' ><img src={gauche}  onClick= {previousSlide}  /></div>
       <div className='col-md-3 slideCol' id='club_1' style={{backgroundImage:'url('+list[0].image+')'}} >
           <div className="overlay">
             <div className='overlaycontent'>
             <a href="#" className="btn btn-info btn-lg btn_hover" id='first_btn'> {list[0].title}  </a>
             </div>
           </div>
       </div>
       <div className='col-md-3 slideCol' id='club_2' style={{backgroundImage:'url('+list[1].image+')'}}>
         <div className="overlay">
             <div className='overlaycontent'>
             <a href="#" className="btn btn-info btn-lg btn_hover" id='sec_btn'>{list[1].title}  </a>
             </div>
           </div>
         </div>
       <div className='col-md-3 slideCol' id='club_3' style={{backgroundImage:'url('+list[2].image+')'}}>
         <div className="overlay">
             <div className='overlaycontent'>
             <a href="#" className="btn btn-info btn-lg btn_hover" id='third_btn'> {list[2].title} </a>
             </div>
           </div>
         </div>
       <div className='col-md-1 arrowIcon' ><img src={droite} onClick= {nextSlide}/></div>
       </div>
      
                   
        
    
      
          
</React.Fragment>
 )
 }
 export default Slider;