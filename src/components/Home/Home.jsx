import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    // Renders the entire app on the DOM
    //LOADS ALL THE MOVIES FROM THE DATABASE
    componentDidMount() {
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
            <div key={movie.id}>
              <p>{movie.title}</p>
              <img src={movie.poster} alt="movie poster" />
              <p>{movie.description}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Home);