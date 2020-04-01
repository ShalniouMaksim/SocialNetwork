import React from 'react';
import { createLogger } from 'redux-logger';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { Footer } from './styled';
import reducer from './redusers';
import watchMessages from './sagas';
import HeaderLogin from './containers/headerLogin';
import UserInfoLogin from './containers/userInfoLogin';
import HeaderLogout from './containers/headerLogout';
import { GlobalStyle } from './globalstyles';
import Loading from './containers/loading';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({ collapsed: true });
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(watchMessages);
const browserHistory = createHistory();
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js', { scope: '../' })
    .then()
    .catch();
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route path="/auth">
          <HeaderLogin />
          <GlobalStyle />
          <Footer>2020</Footer>
        </Route>
        <Route path="/logout">
          <HeaderLogout />
          <GlobalStyle />
          <UserInfoLogin />
          <Footer>2020</Footer>
        </Route>
        <Route path="">
          <Loading />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
