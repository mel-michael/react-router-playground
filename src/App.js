import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Router>
          <div>
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
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/topics" component={Topics} />
              {/* <Route path="/:id" component={Child} /> */}
              <Route path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </div>

        </Router>
      </div>
    );
  }
}

const Home = () => 'We are home';

const About = () => (
  <div>
    <h2>About Charming</h2>
  </div>
);

const Topics = () => (<div><h2>I am all about the topics</h2></div>);

const Child = ({ match }) => (
  <div>
    { console.log('match:', match) }
    <h3>ID: {match.params.id}</h3>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard Page</h2>
  </div>
);

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    console.log('Static', staticContext, code, children);
    if (staticContext)
      staticContext.status = code
    return children
  }} />
)

const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)


export default App;
