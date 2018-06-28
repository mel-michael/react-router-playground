import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />

          </div>

        </Router>
      </div>
    );
  }
}

const Home = () => <h2>We are home</h2>;

const About = () => (
  <div>
    <h2>About Charming</h2>
  </div>
);

const Topics = () => (
  <div>
    <h2>I am all about the topics</h2>
  </div>
);

export default App;
