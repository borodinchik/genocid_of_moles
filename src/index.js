import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Result from './Result';
//
// var color =
//   {
//     backgroundColor: 'red',
//   }
//
// function game(state = color,action) {
//   if (action.type === 'ADD_ID') {
//     return [
//       ...state,
//       action.payload
//     ];
//     }
//     return state;
// }
// const store = createStore(game);

const bodySelector = document.querySelector('#root');
ReactDOM.render(
  <App />,
   bodySelector)
