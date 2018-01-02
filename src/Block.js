import React, { Component } from 'react';

class Block extends Component {

render() {
    return (
        <div onClick={this.props.handler?this.props.handler:null} style={{width: '33.33%',float: 'left', height:'100px',borderRadius: '300px', border:'1px solid black', marginLeft: '2px', marginTop: '2px', backgroundColor: this.props.color?this.props.color:''}}></div>
    );
  }
}
export default Block;
