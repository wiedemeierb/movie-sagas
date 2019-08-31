import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
     <Home />
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(App);
