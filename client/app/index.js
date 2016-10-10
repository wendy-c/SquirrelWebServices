import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import router from './router';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducer/index';
import {Provider} from 'react-redux';
// import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers);

// sagaMiddleware.run(router);

store.subscribe(function() {
  console.log('Store is ', store);
});

render(
  <Provider store={store}>
  {router}
  </Provider>
  , document.getElementById('app'));