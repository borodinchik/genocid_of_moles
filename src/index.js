import React from 'react';
import ReactDOM from 'react-dom';
import allReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootId = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store} >
  <App />
  </Provider>,rootId)
