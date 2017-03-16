import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';

const Home = <h1>Home</h1>

const Tiger = <h1>Tiger</h1>

var App = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home}/>
        <Route path='/tiger' component={Tiger} />
      </Router>
    );
  }
})

module.exports = App;
