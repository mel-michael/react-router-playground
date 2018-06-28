import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import BasicComponent from "./basic";
import ParamsComponent from "./params";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Router Playground</h1>
        </header>

        <Router>
          <div className="navlink">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/basic">Basic</Link>
              </li>
              <li>
                <Link to="/params">Url Parameters</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" render={() => (<h2>Welcome to react router Example home</h2>)} />
            <Route path="/basic" component={BasicComponent} />
            <Route path="/params" component={ParamsComponent} />

          </div>
        </Router>
      </div>
    );
  }
}



export default App;
