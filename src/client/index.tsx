import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import { asyncMiddleware } from '../middlewares/async';
import '../styles/main.scss';

import App from '../index';

declare global {
  interface Window {
    _PRELOADED_STATE: any;
  }
}

const preloadedState = window._PRELOADED_STATE;

const initReducer = reducer;

const { initialState } = preloadedState;

const store = createStore(initReducer, applyMiddleware(asyncMiddleware));

ReactDom.hydrate(
  <Provider store={store}>
    <App {...initialState} />
  </Provider>,
  document.getElementById('app')
);
