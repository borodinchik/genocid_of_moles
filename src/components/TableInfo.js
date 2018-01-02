import React, { Component } from 'react';
import { success } from '../actions/index';
import { connect } from 'react-redux';
import { end } from '../actions/EndGame';
import App from '../App';

class TableInfo extends Component {
  render() {
    if (this.props.level >= 5) {
      alert('вы начали геноцид кротов !!');
      this.props.end();
    }
    return (
      <div>
        <h3>Убито:{this.props.successedClicks}</h3>
        <h3>Уровень:{this.props.level}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    successedClicks: state.app.successedClicks,
    level: state.app.level
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handle: () => dispatch(success()),
    end: (app) => dispatch(end(app))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableInfo);
