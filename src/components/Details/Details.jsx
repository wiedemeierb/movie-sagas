import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    
    render(){
    return (
      <div className="App">
          {/* {JSON.stringify(this.props.reduxStore.detailsReducer)} */}
            <p>{this.props.reduxStore.detailsReducer.title}</p>
            <img src={this.props.reduxStore.detailsReducer.poster} />
            <p>{this.props.reduxStore.detailsReducer.description}</p>
        
      </div>
    );
}}

{/* <div key={movie.id}>
    <p>{movie.title}</p>
    <img src={movie.poster} alt="movie poster" onClick={() => this.handleClick(movie.id)} />
    <p>{movie.description}</p>
</div> */}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Details);