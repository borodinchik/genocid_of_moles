import React from 'react';
import ReactDOM from 'react-dom';
import allReducer from './reducers/index';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const rootId = document.querySelector('#root');
const store = createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());


render(
  <Provider store={store}>
    <App />
    </Provider>, rootId)
