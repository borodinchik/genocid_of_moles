import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props.testStore);
    var min = 0;
    var max = 5;
    var rand = Math.floor(Math.random() * max + min);
    console.log('Random number', rand);
    return (
      <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-4" style={this.props.testStore}></div>
        <div className="col-xs-6 col-md-4"></div>
        <div className="col-xs-6 col-md-4" ></div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4"></div>
          <div className="col-xs-6 col-md-4"></div>
          <div className="col-xs-6 col-md-4"></div>
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  display => ({})
)(App);
