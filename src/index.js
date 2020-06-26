import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Contact from './components/contact';

ReactDOM.render(
  <BrowserRouter>
    
    <Route exact path="/"
             component={App} />
  <div className='jumbotron'>
    <Route path="/SignUp"
             component={SignUpForm} />
  
  <Route path="/SignIn"
             component={SignInForm} />
             <Route path="/contact"
             component={Contact} />
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
