import React, { Component } from 'react';
import {Form, Modal, Button, Row, Col, } from 'react-bootstrap'/* 
import  SnackBar  from '@material-ui/core/SnackBar';
import IconButton from '@material-ui/core/IconButton' */
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import ImageUpload from './imageUpload';
class EditProfile extends Component {
    constructor(props){
        super(props);
        this.state={snackbaropen: false, snackbarmsg:'', clubname:'', clubimage:'', slogan:'', description:'', showPopup: false,
    goals:'', community:'', chairname:'', chairlink:'', vicechair:'', vicechairlink:'', secretary:'', secretarylink:'', facebook:'', 
    linkedin:'', instagram:'',sponsor:''}
        this.handleSubmit= this.handleSubmit.bind(this);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);

    }
    
        togglePopup() {
         this.setState({
           showPopup: !this.state.showPopup
         });
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
   const data = { title:this.state.title,
    snackbaropen: this.state.snackbaropen, snackbarmsg:this.state.snackbarmsg, clubname:this.state.clubname, 
    clubimage:this.state.clubimage, slogan:this.state.slogan, description:this.state.description, showPopup: false,
    goals:this.state.goals, community:this.state.community, chairname:this.state.chairname, chairlink:this.state.chairlink, 
    vicechair:this.state.vicechair, vicechairlink:this.state.vicechairlink, secretary:this.state.secretary, 
    secretarylink:this.state.secretarylink, facebook:this.state.facebook, 
    linkedin:this.state.linkedin, instagram:this.state.instagram,sponsor:this.state.sponsor
}
   fetch('http://localhost:5000/events/add',{
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
                Edit your club's profile
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             
                 <Row>
                     <Col sm={6}>
                         <Form onSubmit={this.handleSubmit}
                         onChange={this.onChangeHandler}
                         >
                             <h5>About your club</h5>
                             <Form.Group controlId="clubname">
                                 <Form.Label>Club's name</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='clubname'
                                
                                 placeholder='New club name'
                                 
                                 />
                                 Club's image
                                 <ImageUpload/>
                             </Form.Group>
                             <Form.Group controlId="slogan">
                                 <Form.Label>Slogan</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='slogan'
                                
                                 placeholder='Slogan'
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="description">
                                 <Form.Label>Description</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='description'
                        
                                 placeholder='Describe your Club'
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="goals">
                                 <Form.Label>Goals</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='goals'
                        
                                 placeholder='What are your Goals'
                                 
                                 />
                             </Form.Group>
                             <Form.Group controlId="community">
                                 <Form.Label>Community</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name="community"
                    
                                 placeholder='Describe your community'
                                 
                                 />
                             </Form.Group>
                        
                         
                         <h5>About Your team</h5>
                         <Form.Group controlId="chairname">
                                 <Form.Label>Chair name</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='chairname'
                                 required
                                 placeholder='Chair name of your club'
                                 
                                 />
                                 
                             </Form.Group>
                             <Form.Group controlId="chairlink">
                                 <Form.Label>Chair's social media</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='chairlink'
                                 required
                                 placeholder='Link to facebook or linkedin'
                                 
                                 />
                                  </Form.Group>
                                  
                             <Form.Group controlId="viceachair">
                                 <Form.Label>Vice chair's name</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='vicechair'
                                 required
                                 placeholder='Vice chair name'
                                 
                                 />
                                 </Form.Group>
                             <Form.Group controlId="vicechairlink">
                                 <Form.Label>Vice chair link</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='vicechairlink'
                                 required
                                 placeholder='Link to facebook or linkedin'
                                 
                                 />
                                </Form.Group>
                                
                                <Form.Group controlId="secretary">
                                 <Form.Label>Secretary's name</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='secretary'
                                 required
                                 placeholder='Secretary name'
                                 
                                 />
                                 </Form.Group>
                             <Form.Group controlId="secretarylink">
                                 <Form.Label>Secretary's link</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='secretary'
                                 required
                                 placeholder='Link to facebook or linkedin'
                                 
                                 />
                             </Form.Group>  
                             <h5>Your Links to Social Media</h5>
                        
                        <Form.Group controlId="facebook">
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control
                            type='text'
                            name='facebook'
                            required
                            placeholder='Link to Facebook'
                            
                            />
                        </Form.Group>
                        <Form.Group controlId="linkedin">
                            <Form.Label>Linked</Form.Label>
                            <Form.Control
                            type='text'
                            name='linkedin'
                            required
                            placeholder='Link to Linkedin'
                            
                            />
                        </Form.Group>
                        
                        <Form.Group controlId="instagram">
                                 <Form.Label>Instagram</Form.Label>
                                 <Form.Control
                                 type='text'
                                 name='instagram'
                                 required
                                 placeholder='Link to Instagram'
                                 
                                 />
                             </Form.Group>
                             <Form.Group>
                                <h5>Your Sponsors</h5>
                                Add sponsor
                                <ImageUpload/>
                                Delete sponsor 
                                <Form.Control
                                 type='text'
                                 name='sponsor'
                                 placeholder='Delete sponsor'
                                 
                                 />
                                 <Button vaiant='primary' type='submit'>  Delete </Button>
                             </Form.Group>
                             <Form.Group>
                             <Button vaiant='primary'
                             type='submit'>
                                 Add 
                             </Button>
                         </Form.Group>
                         </Form>
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
 
export default EditProfile;