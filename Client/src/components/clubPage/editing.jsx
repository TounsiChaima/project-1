import {Form, Modal, Button, Row, Col, } from 'react-bootstrap'
import ImageUpload from './imageUpload';
import React, { Component } from 'react';

export default class Editing extends Component {
    render(){
        return(
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
        
        )
    }
}