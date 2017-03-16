import React, {Component} from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Tiger from './routeComponents/tiger';
import './App.css';

class App extends Component{
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Tiger}/>
      </Router>
    );
  }
}

export default App