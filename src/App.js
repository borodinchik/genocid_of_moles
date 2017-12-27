import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Block from './Block';
import { success } from './actions/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key : 0,
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

_renderBlocks() {
  let colored = Math.floor(Math.random() * this.props.max + this.props.min);
  let blocks = [];

    for(let i = this.props.min; i <= this.props.max; i++) {
      if (i == colored) {
        blocks.push(<Block  key={i} handler={this.props.handle} color={"red"}/>);

      } else {
        blocks.push(<Block key={i} />);
      }
    }
    return blocks;
  }

render() {
  let blocks = this._renderBlocks();
    return (
      <div style={{width: "50%"}}>
        {blocks}
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
