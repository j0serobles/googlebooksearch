import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav       from './components/Nav';
import Bookshelf from './pages/Bookshelf';
import Search    from './pages/Search'; 
import NoMatch   from './pages/NoMatch';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Nav/>
        <Router>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/bookshelf" component={Bookshelf} />
            <Route component={NoMatch} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
