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
        {this.props.reduxStore.moviesReducer.map(movie => {
          return (
            <div>
              <p>{movie.title}</p>
              <img src={movie.poster} />
              <p>{movie.description}</p>
            </div>
          )
        })}
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
