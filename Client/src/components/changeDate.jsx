import React, { Component } from 'react';
import {Form, Modal, Button, Row, Col, } from 'react-bootstrap'/* 
import  SnackBar  from '@material-ui/core/SnackBar';
import IconButton from '@material-ui/core/IconButton' */
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import ImageUpload from './imageUpload';
import ImageUploader from 'react-images-upload';
class ChangeDate extends Component {
    constructor(props){
        super(props);
        this.state={snackbaropen: false, snackbarmsg:'', title:'', category:'', start:'', end:'', 
    image:'', dsc:''}
        this.handleSubmit= this.handleSubmit.bind(this);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    //    this.onChange = this.onChange.bind(this);

    }


    snackbarClose=(event)=>{
        this.setState({snackbaropen:false});
    }


    handleSubmit(event){
    /*    let files = event.target.files;
        this.setState({ 'selectedFiles': files })
    event.preventDefault();
   let data = new FormData();
       //Append files to form data
       let files = this.state.files;
       for (let i = 0; i < files.length; i++) {
         data.append("file", files[i], files[i].name);
       }
     */
   // data.append ('file', this.state.)
   // alert(event.target.EventName.value);
   event.preventDefault();
   const data = { title:this.state.title,category:this.state.category,dsc:this.state.dsc
    ,start:this.state.start,end:this.state.end}
   fetch('http://localhost:4000/eventsDB/add',{
    method:'POST'  ,
    headers:{
          
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }  ,
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then((result)=>
    {
        alert(result);
    },(error)=>{
        alert('Failed')
    }) 
}

onChangeHandler=event=>{
    this.setState({ [event.target.name]:event.target.value });
    console.log (this.state.title)
}
onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}


    state = {  }
    render() { 
        return ( 
            <div className="container">
            
            
            
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                The date is going to be changed 
              </Modal.Title>
              <Form onSubmit={this.props.onChange}
                         
                         ></Form>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick= {this.props.onChange}>OK</Button>
              <Button onClick={this.props.onHide}>Cancel</Button>
            </Modal.Footer>
          </Modal>
          </div>
         );
    }
}
 
export default ChangeDate;