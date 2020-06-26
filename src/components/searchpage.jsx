
import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchPage = () => {
  return (
<React.Fragment>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'transparent ', paddingLeft:'25%'}}>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    
       <form className="form-inline my-2 my-lg-0 ml-5">
          <input className="form-control mr-sm-2 " type="search" placeholder="Search.." aria-label="Search" style={{backgroundColor:'white'}}/>
          <button className="btn btn-outline-primary  my-2 my-sm-0" type="submit"> 
          <FontAwesomeIcon icon={faSearch} /></button>
         
        </form>
        
        
        </div> 
        
        </nav>
       

             </React.Fragment>
  );
}

export default SearchPage;

