import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Contact from "./contact";
import  {Link} from 'react-router-dom';



const Footer = () => {
    return (
      <MDBFooter id='thefooter' color="#faf8e6" className="font-small pt-4 mt-4 jumbotron" style={{backgroundColor:'#E8E8E8', marginTop:'0px !important'}}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h1 className="title" style={{textAlign:"center"}}> BRIGHT INSAT</h1>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="Contact">Links</h5>
              <ul>
                <li className="list-unstyled">
                <Link  to="/contact" >
             
              Contact Us  
             </Link>
                </li>
               
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
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
      </MDBFooter>
    );
  }
  
  export default Footer;
