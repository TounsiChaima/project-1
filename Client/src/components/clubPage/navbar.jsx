import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Navbar2 extends React.Component {
  state = { 
    navBackground:''}



    componentDidMount() {
      document.addEventListener("scroll", () => {
        const backgroundcolor = window.scrollY < 100 ? "transparent" : "#404040";
  
        this.setState({ navBackground: backgroundcolor });
      });
    }

    render() { 
      const {navBackground}=this.state;
        return (


<nav  className="navbar navbar-expand-lg   fixed-top" 
      style={{backgroundColor: navBackground, opacity:"0.7"}}>
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Bright Insat</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#upcoming">Upcoming Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#pastevents">Past Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Sponsors & Partners</a>
          </li>

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Feedbacks</a>
          </li>

          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>

       

        </ul>
      </div>
    
  </nav>

);

}


}

export default Navbar;