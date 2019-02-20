import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './page/Welcome';
import TypeSystem from './page/TypeSystem';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={Welcome} />
            <Route path="/type-system" component={TypeSystem} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
