import React, { Component } from 'react';
import "./Authentification.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "./actions/authActions";
import { Button, Grid, CircularProgress } from "@material-ui/core";
//import INSAT from '../INSAT.jpg'; 
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";

//import Alert from "./utils/Alert";
import { NavLink } from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
       
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      console.log(this.props.history.location);
      this.props.history.push('/');
      console.log(this.props.history.location);
      alert('Error logging in please try again');
    });
  }

  render() {
    return (
      <div className="area" id="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      
 
      <div className="outer">
        <div className="middle">
          <div className="inner-login">
            <div className="left-side" id="left-side">
           
            
        
            </div>
            <div className="right-side">
              <form onSubmit={this.onSubmit}>
                <div className="centered">
                  
                  <div className="title" style={{color :"#abcedb"}}>
                    Login
                  </div>
                  <div className="under-title">
                    Use your email to login as a club owner
                   
                  </div>
                  
                 

                  <div className="label">Email</div>
                  <Input
                    className="text-fields"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle
                          className="icon"
                          style={{ color: "#2A638B", transition: "color 1s" }}
                          id="icon"
                        />
                      </InputAdornment>
                    }
                  />
                  
                  <div className="label">Password</div>
                  <Input
                    className="text-fields"
                    type="password"
                    name="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <LockOpenIcon
                          className="icon"
                          style={{ color: "#2A638B", transition: "color 1s" }}
                          id="icon-lock"
                        />
                      </InputAdornment>
                    }
                  />
                  <p className="forgot-password">
                    <NavLink>
                      <RouterNavLink
                        to="/forgotpassword"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        Forgot your password?
                      </RouterNavLink>
                    </NavLink>
                  </p>
                  <div className="buttons">
                    <Grid container>
                      <Grid s={6}>
                        <Button
                          id="register-btn"
                          size="large"
                          style={{
                            paddingLeft: "3rem",
                            paddingRight: "3rem",
                            fontWeight: "bold",
                            color: "#abcedb",
                            transition: "color 1s",
                          }}
                          onClick={() =>
                            this.props.history.push("/register")
                          }
                        >
                          REGISTER
                        </Button>
                      </Grid>
                      <Grid id="spinner" item>
                        <CircularProgress />
                      </Grid>
                      <Grid item>
                        <Button
                          id="login-btn"
                          size="large"
                          variant="contained"
                          style={{
                            borderRadius: "50px",
                            paddingLeft: "3rem",
                            paddingRight: "3rem",
                            backgroundColor: "#abcedb",
                            fontWeight: "bold",
                            color: "#FFFFFF",
                            transition: "background-color 1s",
                          }}
                          onClick={this.onSubmit}
                        >
                          LOGIN
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}


Login.propTypes = {
login: PropTypes.func.isRequired,
error: PropTypes.object.isRequired,
isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
isAuthenticated: state.auth.isAuthenticated,
error: state.error,
});
export default connect(mapStateToProps, { login })(Login); 