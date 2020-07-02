import React,{Component} from 'react';
import SearchPage from './searchpage'; 
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import INSAT from '../INSAT.svg';
import "./styling.css";
import { Button } from './bootstrap-component';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SignUpForm from '../pages/SignUpForm';
import TheCalendar from './theCalendar';
import ClubSlider from './clubSlider';
import Welcome from './welcome';

class Navbar extends Component {
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
      <React.Fragment>
        <BrowserRouter>
      <nav className="navbar navbar-expand-lg   fixed-top" 
      style={{backgroundColor: navBackground, opacity:"0.7"}} >
      <a className="navbar-brand ml-5" href="#">
          <img src={INSAT} alt="INSAT" style={{ width: '35px' }} />
        </a>
        <button
          className="navbar-toggler here" 
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: '#fff' }} />
          </span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
          <ul className="navbar-nav m-auto nav-pills">
          
            <li className="nav-item " href='#about'>
           
              <AnchorLink className="nav-link text-white text-uppercase ml-5" 
              href='#about'
            >
                About us
              
              </AnchorLink>
            
            </li>
            <li className="nav-item" href='#contact'>
           
              <AnchorLink href='#contact'
                className="nav-link text-white text-uppercase ml-3"
                
               >
              
                Contact Us
              </AnchorLink>
            
            </li>
           
            <li className="nav-item" href='#clubs'>
           
              <AnchorLink
                className="nav-link text-white text-uppercase ml-3"
                href='#clubs'
                >
                Clubs
              </AnchorLink>
            
            </li>
            <li className="nav-item" href='#events' >
           
              <AnchorLink href='#events'
                className="nav-link text-white text-uppercase ml-3"
              
                
                >
                Events
              </AnchorLink>
            
            </li>
             <li className="nav-item  btn btn-light ml-3"
            
             >
           
            
               <Link  to="/SignUp" >
             
                Sign Up  
                </Link>
            
            </li>
            <li className="nav-item  btn btn-light ml-3"
             >
               
           
               <Link  to="/SignIn" >
             
             Sign In  
             </Link>
                      
            
            </li>
           
          </ul>

          
         
        </div>
       
        <div className='burger'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
      </nav>

</BrowserRouter>
      </React.Fragment>

    );
  }
}

export default Navbar;

