import React from 'react';
import { createLogger } from 'redux-logger';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Footer } from './styled';
import reducer from './redusers';
import watchMessages from './sagas';
import HeaderComponent from './containers/header';
import UserInfo from './containers/userInfo';
import { GlobalStyle } from './globalstyles';


const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watchMessages);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: '../' }).then().catch();
}
ReactDOM.render(
  <Provider store={store}>
    <HeaderComponent />
    <GlobalStyle />
    <UserInfo />
    <Footer>
      2020
    </Footer>
  </Provider>,
  document.getElementById('root'),
);
