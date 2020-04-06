/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createLogger } from 'redux-logger';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Footer } from './styled';
import reducer from './redusers';
import watchMessages from './sagas';
import RouterComponent from './components/routeConfig';
import { GlobalStyle } from './globalstyles';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });
const store = createStore(Object(reducer), applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watchMessages);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js', { scope: '../' })
    .then()
    .catch();
}
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <RouterComponent />
    <Footer>2020</Footer>
  </Provider>,
  document.getElementById('root'),
);
