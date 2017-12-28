import React, { Component } from 'react';
import { success } from '../actions/index';
import { connect } from 'react-redux';
import App from '../App';



class TableInfo extends Component {

render() {
  console.log(this.props.successClicks);
  if (this.props.successClicks >= 10) {
    alert('New level');

  }

    return (
      <div className="container">
        <h3>Убито:{this.props.successClicks}</h3>
        <h3>Уровень:</h3>
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
