import React, { Component } from 'react';
import { connect } from 'react-redux';
import Block from './Block';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key : 0
    };
  }
  static defaultProps = {
    min: 0,
    max: 5
  }

componentDidMount(){
  setInterval(() => {
    this.setState({key:this.state.key + 1})
  },1000);
}

  _handle() {
    var num = 1;
    // var result = num = true?num=num + 1:"Error";
    if (num = 1) {
      num == num + 1;
     console.log(num);
    }else{
      console.log('Error!');
    }

  }
  _renderBlocks() {
    let colored = Math.floor(Math.random() * this.props.max + this.props.min);
    let blocks = [];

    for(let i = this.props.min; i <= this.props.max; i++) {
      if (i == colored) {
        blocks.push(<Block key={i} handler={() => this._handle()} color={"red"}/>);
      } else {

        blocks.push(<Block key={i} />);
      }
    }
    return blocks;
  }

  render() {

    console.log(this.state);

    let blocks = this._renderBlocks();

    return (
      <div style={{width: "50%"}}>
      {blocks}
      </div>
    );
  }
}
export default App;
// export default connect(
//   state => ({
//     testStore: state
//   }),
//   display => ({})
// )(App);
