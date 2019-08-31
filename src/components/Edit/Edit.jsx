import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
    render() {
        return (
            <h2>Edit Page</h2>
        )
    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    };
};

export default connect(mapStateToProps)(Edit);