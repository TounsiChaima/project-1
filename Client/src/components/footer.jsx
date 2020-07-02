import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Contact from "./contact";
import  {Link} from 'react-router-dom';
import ScrollButton from "./scrollButton";
import { Scroller } from "fullcalendar";



const Footer = () => {
    return (
      <MDBFooter id='thefooter' color="#f8f9fa" className="font-small pt-4 mt-4 jumbotron"
       style={{backgroundColor:'#f8f9fa', marginTop:'0px !important', textAlign:'center'}}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h1 className="title" style={{textAlign:"center"}}> BRIGHT INSAT</h1>
              <h4 style={{textAlign:'center'}}>
                  Let's make INSAT great again.
              </h4>
            </MDBCol>
            <MDBCol md="6">
              
              <ul>
                <li className="list-unstyled">
                <Link  to="/contact" >
             
              About Us  
             </Link>
                </li>
               
                <li className="list-unstyled">
                  <a href="#!">Contact Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Clubs</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Events</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:  <a href="https://www.brightinsat.com"> brightinsat.com </a>
          </MDBContainer>
        </div>
        <ScrollButton />
      </MDBFooter>
    );
  }
  
  export default Footer;
