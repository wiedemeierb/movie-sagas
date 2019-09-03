import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {

    handleClickCancel = (id) => {
      console.log('handleClickCancel is working')
      this.props.history.push('/details');
    }
    render() {
        return (
            <>
            <h2>Edit Page</h2>
            <input />
            <button onClick={this.handleClickCancel}>Cancel</button>
            <button>Save</button>
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