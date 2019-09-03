import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    handleClickBack = () => {
        // console.log('handleClick Back To List')
        this.props.history.push('/');
    }

    handleClickEdit = () => {
        // console.log('handleClick to Edit Page')
        this.props.history.push('/edit');
    }
    
    render(){
    return (
      <div className="App">
          {/* {JSON.stringify(this.props.reduxStore.detailsReducer)} */}
            <p>{this.props.reduxStore.detailsReducer.title}</p>
            <img src={this.props.reduxStore.detailsReducer.poster} alt='movie poster' />
            <p>{this.props.reduxStore.detailsReducer.description}</p>
            <p>{this.props.reduxStore.genresReducer.genres}</p>
            <button onClick={this.handleClickBack}>Back To List</button>
            <button onClick={this.handleClickEdit}>Edit Description</button>
        
      </div>
    );
}}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Details);