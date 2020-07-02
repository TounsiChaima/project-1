
import React, { Component } from 'react';
import './styling.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from '@fullcalendar/bootstrap';
import Dialog from 'react-bootstrap-dialog'
import RenderBody from './renderBody';
import axios from 'axios';
import {getEvents} from "../eventData";
import {getCategories} from "../categoriesData";
import img from '../assets/event_parallax.jpg';


export default class HomeCalendar extends React.Component {


  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.handleClick = this.handleClick.bind(this)   
  }

  state = {
    newStart:[],
    addModalChangeShow: false,
    addModalShow: false,
    modal: false,
    requiredItem: 0,
    events:[],
    categories:[],
    seen: false
  }
  replaceModalItem(info) {
    this.setState({
      requiredItem: this.state.events.indexOf(info.event)
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempevents = this.state.events;
    tempevents[requiredItem] = item;
    this.setState({ events: tempevents });
  }

  deleteItem(index) {
    let tempevents = this.state.events;
    tempevents.splice(index, 1);
    this.setState({ events: tempevents });
    
  }
    
  componentDidMount(){
   // this.setState({events: getEvents(), categories: getCategories()});
  this.setState({ categories: getCategories()});
  axios.get('http://localhost:5000/events/')
       .then(response=>{
          this.setState({events: response.data});
         })
       .catch(function(error){console.log(error)});
  }

  formatEvents() {
  return this.state.events.map(event => {
      const {title, end, start} = event
    
      let startTime = new Date(start)
      let endTime = new Date(end)
    
   return {
       title, 
       start: startTime,
       end: endTime, 
       extendedProps: {...event}
  }
  })

}


     handleClick=(eventClickInfo)=>{
        
        this.dialog.show({
           // title:" title",
            body: 'You want to add an event ?',
         
           
            actions: [
              Dialog.CancelAction(),
             
              Dialog.DefaultAction(
                'Yes',
                () => {
                  this.setState({addModalShow:true})},
                'btn-primary'
              )
            ],
            bsSize: 'small',
            onHide: (dialog) => {
              dialog.hide()
              console.log('closed by clicking background.')
            }
          })

      }
      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
    
      handleDragStop = () => {
        this.dialog.show({
          // title:" title",
           body: 'The date will be changed ',
        
          
           actions: [
             Dialog.CancelAction(),
            
             Dialog.DefaultAction(
               'OK',
               () => {
                 console.log('do stuff')},
               'btn-primary'
             )
           ],
           bsSize: 'small',
           onHide: (dialog) => {
             dialog.hide()
             console.log('closed by clicking background.')
           }
         })
      };
      // handleEventClick= ({event}) => {
        // openevent is a function I wrote to open a form to edit that appointment
       // this.props.openAppointment(event.extendedProps)
 //this.dialog.showAlert('Hello Dialog!')}
 
  /*  handleEventDrop = (info) => {
            if(window.confirm("Are you sure you want to change the event date?")){
                console.log('change confirmed')
    
                // updateAppointment is another custom method
                this.props.updateAppointment({...info.event.extendedProps, start: info.event.start, end: info.event.end})
    
            } else {
                console.log('change aborted')
            }
       }*/
       changeTitle = () => {   
        let events = [...this.state.events];
        events[0].title = new Date().toTimeString();
        events[1].title = new Date().toTimeString();
    
        this.setState({  events });
      };
      handleDrop=()=>{
        let events = [...this.state.events];
       
      }
      formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    
  formatEvents() {
    return this.state.events.map(event => {
        const {title, end, start} = event
      
        let startTime = new Date(start)
        let endTime = new Date(end)
      
     return {
         title, 
         start: startTime,
         end: endTime, 
         extendedProps: {...event}
    }
    })
  
  }
  
  
      
  render() {
    let {title, start, end, events,newStart}=this.state;
            var dateFormat = require('dateformat');
    
    

    const requiredItem = this.state.requiredItem;

  
     
     
     
     
     
     
     
     
    
  
    return (
    <React.Fragment>
         <div className='row'style={{ backgroundColor:'white'}} >
           
           <div className="parallax" id='thirdparallax' style={{backgroundImage:`url(${img})`,backgroundAttachment:'fixed',
            backgroundSize:'cover',textAlign:'center', maxHeight:'100vh', position:'relative'}}>
                 
                 <div  id='layer_calendar' style={{margin:'5%'}} >
      <div  style ={{height: '80vh', backgroundColor:'white', margin:'5%'}}>
      
              <FullCalendar dateClick={this.handleDateClick} 
              plugins={[ dayGridPlugin, interactionPlugin,bootstrapPlugin ]}
                height='parent'
                editable={false}
                selectable={false}
                selectMirror={false}
                slotWidth={60}
                eventColor= 'white'
                eventBackgroundColor='#faf1e6'
                eventBorderColor="#faf1e6"
                eventTextColor='black'
                events={this.formatEvents()}
                
                 header={{
                  right:  'prev,next today ',
                  center: 'title',
                  left:'myCustomButton,timeGridWeek,timeGridDay,listWeek'
                 }}
             
                
              />
             
           
                
</div>
      </div>
      </div>
      </div>
</React.Fragment>
          

)
  }
}

    
