import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM

  //LOADS ALL THE MOVIES FROM THE DATABASE
  componentDidMount(){
    //LOADS MOVIES ON MOUNT
    this.getMovies();
  }

  getMovies = () => {
    this.props.dispatch({
      type: 'GET_MOVIES'
    })
    console.log('get movies dispatch working')
  }


  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    reduxStore
  };
};

export default connect(mapStateToProps)(App);
