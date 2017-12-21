import React, { Component } from 'react';
import { connect } from 'react-redux';
import Block from './Block';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key : 0,
      counter : 0,
    };
  }


static defaultProps = {
    min: 0,
    max: 5
  }

componentDidMount(){
  setInterval(() => {
    this.setState({key:this.state.key + 1})
  },4000);
}

_handle() {
  this.setState({
    counter: this.state.counter + 1,
  });
}

_renderBlocks() {
  let colored = Math.floor(Math.random() * this.props.max + this.props.min);
  let blocks = [];

    for(let i = this.props.min; i <= this.props.max; i++) {
      if (i == colored) {
        blocks.push(<Block  key={i} handler={() => this._handle()} color={"red"}/>);
      } else {
        blocks.push(<Block key={i} />);
      }
    }
    return blocks;
  }

  render() {
    console.log(this.state);
    let blocks = this._renderBlocks();
    // console.log('blocks',blocks);
    return (
      <div style={{width: "50%"}}>
      {blocks}
      </div>
    );
  }
}
export default App
