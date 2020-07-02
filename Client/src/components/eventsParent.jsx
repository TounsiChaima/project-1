import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "./styling.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import {getCategories} from "../categoriesData";
import {getEvents} from "../eventData";
import {Link, BrowserRouter} from 'react-router-dom';
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import CategoriesList from '../common/categoriesList';

class EventsParent
 extends Component {
    state = { 
        events:[],
        categories:[],
        filtered:'',
        selectedCategorie:''
    

     }
//ADDED STUFF
/*  constructor(props){
       super(props),
       this.state={events:[]};
     }
 */
 
   
      componentWillReceiveProps (){ 
        AOS.refresh(); 
      } 
    componentDidMount(){
      this.setState({ categories: getCategories()});
        AOS.init({
            duration : 2000
          })

          axios.get('http://localhost:5000/events/')
          .then(response=>{
            this.setState({events: response.data});
          })
          .catch(function(error){console.log(error)});
        
         
    }
 
    handleCategorieSelect=categorie=>{
        let {selectedCategorie,events,filtered}=this.state;
    
        this.setState({selectedCategorie: categorie});
        filtered = selectedCategorie
        ? events.filter(m=>m.categorie._id=== selectedCategorie._id)
        : events;
        
        
        
    }
   
    render() { 
          
 function renderRow(group, index){
  return (<div className="row" key={index}>
            {group.map(renderColumn)}
          </div>);
}

function renderColumn(image, index){
  return (<div className="col-xs-3" key={index}>
            <img src={image} />
         </div>);
}

function groupBy(amountOfItemsPerGroup, items){
  var groups = [], 
    group, 
    total = items.length;
  for (var i=0; i < total; i += amountOfItemsPerGroup) {
    group = items.slice(i, i+amountOfItemsPerGroup);
    groups.push(group);
  }
  return groups;
}
        const{selectedCategorie,events}=this.state;
        
        let filtered= selectedCategorie
        ? events.filter(m=>m.categorie._id=== selectedCategorie._id)
        : events;
        const l=filtered.length;
        var imageGroups = groupBy(4, filtered);
       // const nb=l/5;
        let i=0;
        var settings={
          autoplay: false,
          speed: 500,
          autoplaySpeed: 500,
          cssEase: "linear",
          dots:false,
          arrows: true,
          infinite:false,
          speed:300,
          slidesToShow:4,
          slidesToScroll:3,
          responsive: [
          
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }
        
        let lengthh = events.length;
        console.log(events[0] , lengthh);
        for(var k = 0; k < lengthh; k++)
        { 
         let str =events[k].image.split("\\").join("/");
         events[k].image = str;
         console.log(str);
         let str1 = str.substring(29);
         let str2 = str.substring(0,21);
         events[k].image = str2+str1;
         console.log ('FINAL RESULT'+events[k].image); }
        return ( 
        <React.Fragment>

        <BrowserRouter>
      <div className='jumbotron '
            id="eventsection" style={{marginBottom:'5%', backgroundColor:'white', marginTop:'40%'}}>
                            

     <h1 id="withCarousel" style={{marginTop:'5%', height:'10%'}}>Upcomming events</h1>
     
   
          <CategoriesList
          style={{height:'20%'}}
            items={this.state.categories} 
            onItemSelect={this.handleCategorieSelect}
            selectedItem={this.state.selectedCategorie}
           />
          

 <div  style={{height:'50vh'}}>
 <Slider {...settings}>
                 {filtered.map(function(current){
                        
          return(
            <BrowserRouter>
            <div id ='eventimage'>
              <img src= {current.image} id="eventsitem"/>
              <div className="overlay">
                <div className='overlaycontent'>

                
              <Link  to={"/"+current.title} >
            
            Learn More
             </Link>
              </div>
              </div>
            </div>
            </BrowserRouter>)})}
            
       </Slider>
 </div>


                        </div>
                        </BrowserRouter>
            </React.Fragment>);
    }
}
 
export default EventsParent
;
