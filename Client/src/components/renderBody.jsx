import React, { Component } from 'react';
import {Form, Modal, Button, Row, Col, } from 'react-bootstrap';
import img from '../assets/defaultpic.png';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import ImageUpload from './imageUpload';
import ImageUploader from 'react-images-upload';
import axios from'axios';


class RenderBody extends Component {
    constructor(props){
        super(props);
        this.state={snackbaropen: false, snackbarmsg:'', title:'', category:'', start:'', end:'', 
    image:'', dsc:'',  file: '', imagePreviewUrl: ''}
        this.handleSubmit= this.handleSubmit.bind(this);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);
     

    }


    snackbarClose=(event)=>{
        this.setState({snackbaropen:false});
    }


    handleSubmit(event){

        let files = event.target.files;
        this.setState({ 'selectedFiles': files });
    console.log(files);
        event.preventDefault();
  
   // data.append ('file', this.state.)
   // alert(event.target.EventName.value);
   //event.preventDefault();
   const data = { title:this.state.title,category:this.state.category,dsc:this.state.dsc
    ,start:this.state.start,end:this.state.end}
   console.log(data);
   /*
   axios.post("http://localhost:5000/events/add/", data)
   
    .then((result)=>
    {
        alert(result);
    },(error)=>{
        alert('Failed')
    });

  */
 
 
 
 /* TRYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
 
  postFile('http://localhost:5000/add', image)
  .then(data => console.log(data))
  .catch(error => console.error(error))

function postFile(url, fileSelector) {
  const formData = new FormData()
  const fileField = document.querySelector(fileSelector)
  
  formData.append('username', 'abc123')
  formData.append('avatar', fileField.files[0])

  return fetch(url, {
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: formData  // Coordinate the body type with 'Content-Type'
  })
  .then(response => response.json()),(error)=>{
    alert('Failed')
};
}*/
   


    window.location.reload();
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



_handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

   
    render() { 
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        }
    
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
                Add a New Event
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
                 <Row>
                     <Col sm={6}>
                         <Form onSubmit={this.handleSubmit}
                         onChange={this.onChangeHandler}
                         >
                             <Form.Group controlId="title">
                                 <Form.Label>Event name</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='title'
                                 required
                                
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="start">
                                 <Form.Label>Start date</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='start'
                                 required
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="end">
                                 <Form.Label>End date</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='end'
                                 required
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="dsc">
                                 <Form.Label>Description</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='dsc'
                                 required
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="category">
                                 <Form.Label>Category</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='category'
                                 required
                                 placeholder=''
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="image">
                             <img
                               src={imagePreviewUrl || img}
                               alt="Uploaded Image"
                               height='200'
                                width='200'
                                />
                         <Form.File id="exampleFormControlFile1" 
                         label="Event Image"
                         onChange={this._handleImageChange} />
                         </Form.Group>
                         <Form.Group>
                             <Button vaiant='primary'
                             type='submit'>
                                 Add 
                             </Button>
                         </Form.Group>
                        
                         </Form>
                     </Col>
                     <Col>

                   
                   
  
                     
                     </Col>
                 </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
         );
    }
}
 
export default RenderBody;