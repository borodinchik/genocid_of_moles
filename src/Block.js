import React, { Component } from 'react';
import Result from './Result';


class Block extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div onClick={this.props.handler + 1?this.props.handler:null} style={{width: '33.33%',float: 'left', height:'40px', border:'1px solid black', marginLeft: '2px', marginTop: '2px', backgroundColor: this.props.color?this.props.color:''}}></div>
    );
  }
}



export default Block;
