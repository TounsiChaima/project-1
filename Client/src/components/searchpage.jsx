
import React, {Component} from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';


class SearchPage extends Component {

  state = {
    error:null,
    title:null,
    datatitle:null,
    image:null,
    dsc:null,
    isLoading:false
  }

  myfunc=(results)=>{
    return(
      <div className='jumbotron'>results</div >
    )
  }

// This is fuction which will fire off on change in input tag
  onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    // or you can also write e.target.title ... becoz name of input tag is title
    this.setState({title : e.target.value})
    console.log('state of title ' + this.state.title);
    return (<div id='result'> e.target.value</div>)
  }

// This is fuction which will fire off on submiting the form
  onSubmit = (e) => {
    const title = { title:this.state.title }
    console.log(title)
    e.preventDefault();

    // Start Loading
    this.setState({ isLoading:true })

    axios({
        method: 'post',
        url: 'http://localhost:4000/eventsDB',
        data: title,
        }).then(search => {
         

          // Reasults find so cancel loading
          this.setState({ isLoading:false })

          // Check for error from database
          if(search.data === "error"){
            console.log('error')
            this.setState({ 
              error:'No results found',
              //setting data to null becoz error is there
              title:null,
              datatitle:null,
              image:null,
              dsc:null
            })
          }
          // If found seacrh in database then set state variables
          else{
            this.setState({
              error:null,   // setting error to null
              datatitle:search.data.title,
              image:search.data.image,
              dsc:search.data.dsc
              
            }
            ) 
             
          }
            console.log('the response isss '+ this.state.datatitle)
        }) ;this.myfunc(this.state.title);;
  }
  render() {

  return (
<React.Fragment>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'transparent ', paddingLeft:'25%'
     }}>
      <div className="collapse navbar-collapse  " id="navbarTogglerDemo02" style={{width:'40px',
    display:'grid',gridTemplateColumns:'1fr'}}>
    
       <form onSubmit = {this.onSubmit} className="form-inline my-2 my-lg-0 ml-5 row">
          <input 
          onChange = {this.onChange}
          className="form-control mr-sm-2 " type="search" placeholder="Search.." aria-label="Search" style={{backgroundColor:'white'}}/>
          
          <button className="btn btn-outline-primary  my-2 my-sm-0" type="submit"> 
          <FontAwesomeIcon icon={faSearch} /></button>
         
         
        </form>
        
        <center  className='row'>
        {/* Conditional operator like if else */}
        {this.state.error?(<div>{this.state.error}</div>):''}
        {this.state.datatitle?(<div style={{backgroundColor:'white'}}>{this.state.datatitle}</div>):''}
        {this.state.imagePath?(<div><img src={this.state.imagePath} alt="logo"/></div>):''}
        {this.state.discription?(<div>{this.state.discription}</div>):''}
      </center>
        </div> 
        
        </nav>
       

             </React.Fragment>
  );
}
}

export default SearchPage;

