import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import routes from "./routes";

// initialize rotues and navi links
const initRoutes = () => (
  <Router>
    <div>
      
      {routes}
    </div>
  </Router>
);


const initializedRoutes = initRoutes();
ReactDOM.render(
  initializedRoutes, 
  document.getElementById("root")
);