import React, { Component } from 'react';
import { success } from '../actions/index';
import { connect } from 'react-redux';
import App from '../App';



class TableInfo extends Component {
  // var clickPoints = this.props.successClicks;

render() {
return (
      <div className="container">
        <h3>Убито:{this.props.successClicks}</h3>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return {

    successClicks: state.app.successedClicks
  }

}

function mapDispatchToProps(dispatch) {
  return {
    handle: () => dispatch(success())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(TableInfo);
