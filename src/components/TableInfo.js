import React, { Component } from 'react';
import { success } from '../actions/index';
import { connect } from 'react-redux';
import App from '../App';



class TableInfo extends Component {
  render() {
    return (
      <div>
        <h3>Убито:{this.props.successedClicks}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    successedClicks: state.app.successedClicks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handle: () => dispatch(success())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableInfo);
