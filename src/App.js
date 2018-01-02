import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Block from './Block';
import { success } from './actions/index';
import { successLevel } from './actions/successLevel';//successLevel
import { end } from './actions/EndGame';
import TableInfo from './components/TableInfo';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {
    key : 0,
  };
}

static defaultProps = {
    min: 0,
    max: 11
  }

componentDidMount(){
  setInterval(() => {
    this.setState({key:this.state.key + 1})
  },this.props.delay);

}

handleLevel = () => {
  let {successedClicks,level,delay,countClickLevel} = this.props;
    if (successedClicks >= 10) {
        this.props.lvlSuccess({level,delay});
        return;
      }
      this.props.handle({successedClicks});
    }

_renderBlocks() {
  let colored = Math.floor(Math.random() * this.props.max + this.props.min);
  let blocks = [];
  for(let i = this.props.min; i <= this.props.max; i++) {
    if (i == colored) {
      blocks.push(<Block  key={i} handler={this.handleLevel} color={"red"}/>);
    } else {
      blocks.push(<Block key={i} />);
    }
  }
  return blocks;
}

render() {
  let blocks = this._renderBlocks();
  return (
    <div>
      <div className="container right">
        <div style={{width: "50%"}}>
          {blocks}
        </div>
      </div>
    <div className="result">
      <TableInfo />
      </div>
     </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      successedClicks: state.app.successedClicks,
      level: state.app.level,
      delay: state.app.delay,
      countClickLevel: state.app.countClickLevel
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handle: (app) => dispatch(success(app)),
    lvlSuccess: (app) => dispatch(successLevel(app)),
    end: () =>  dispatch(end())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
