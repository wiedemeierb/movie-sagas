import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    handleClickCancel = (id) => {
      console.log('handleClickCancel is working')
      this.props.history.push('/details');
    }

    handleClickSave = (id) => {
        console.log('handleClickSave is working')
        this.props.history.push('/details');
    }

    render() {
        return (
            <>
            <h3>Edit Movie Name</h3>
            <input placeholder="Edit Movie Name"/>
            <h3>Edit Movie Description</h3>
            <input placeholder="Edit Movie Description"/>
            <br />
            <button onClick={this.handleClickCancel}>Cancel</button>
            <button onClick={this.handleClickSave}>Save</button>
            </>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Edit);