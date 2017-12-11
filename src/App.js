import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-4"><div className="circle one"></div></div>
        <div className="col-xs-6 col-md-4"><div className="circle two"></div></div>
        <div className="col-xs-6 col-md-4"><div className="circle three"></div></div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4"><div className="circle four"></div></div>
          <div className="col-xs-6 col-md-4"><div className="circle five"></div></div>
          <div className="col-xs-6 col-md-4"><div className="circle six"></div></div>
          </div>
      </div>
    );
  }
}

export default App;
