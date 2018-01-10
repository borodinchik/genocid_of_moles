import React, { Component } from 'react';
import { success } from '../actions/index';
import { connect } from 'react-redux';
import { end } from '../actions/EndGame';
import { drop } from '../actions/DropLife';
import App from '../App';

class TableInfo extends Component {
  constructor(props){
  super(props);
  }
_endGame(){
  if (this.props.level >= 5) {
      alert('вы начали геноцид кротов !!');
      this.props.end();
  }
}


render() {
    let end = this._endGame();
    return (
  <div>
    <hr />
      <h3>Убито:{this.props.successedClicks}</h3>
        <h2>Уровень:{this.props.level}</h2>
        <h1>Жизни:{this.props.drop}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    successedClicks: state.app.successedClicks,
    level: state.app.level,
    drop: state.app.drop
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handle: () => dispatch(success()),
    end: () => dispatch(end()),
    drops: () => dispatch(drop())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableInfo);
