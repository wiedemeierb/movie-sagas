import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionChannel } from 'redux-saga/effects';

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

    handleClick = (id) => {
      console.log('handleClick operational:')
      //DISPATCH TO REDUCERS
      this.props.dispatch({
        type: 'GET_DETAILS',
        payload: id
      })
      console.log('get details dispatch working')
      this.props.history.push('/details');
    }

    render() {
    return (
      <div className="App">
        {this.props.reduxStore.moviesReducer.map(movie => {
          return (
            <div key={movie.id}>
              <p>{movie.title}</p>
              <img src={movie.poster} alt="movie poster" onClick={()=>this.handleClick(movie.id)}/>
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