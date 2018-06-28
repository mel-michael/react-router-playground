import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BasicComponent extends Component {
  render() {
    return (
      <Router>
        <div className="navlink">
          <h2>Basic Example of Routing</h2>
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

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />

        </div>

      </Router>
    );
  }
}

const Home = () => <h2>We are home</h2>;

const About = () => (
  <div>
    <h2>About Charming</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
    <Route path={`${match.url}/:topicId`} component={Topic} />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);


export default BasicComponent;
