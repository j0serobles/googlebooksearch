import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Nav       from './components/Nav';
import Bookshelf from './components/Bookshelf';
import Detail    from './components/Detail';
import Search    from './components/Search'; 
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
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
