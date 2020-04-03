import React from 'react';
import { createBrowserHistory as createHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import HeaderLogin from './containers/headerLogin';
import UserInfoLogin from './containers/userInfoLogin';
import HeaderLogout from './containers/headerLogout';

const browserHistory = createHistory();
export default function RouterComponent() {
  if (localStorage.isAuth === 'true') {
    browserHistory.push('/logout');
  } else browserHistory.push('/auth');
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path="/auth">
          <HeaderLogin />
        </Route>
        <Route path="/logout">
          <HeaderLogout />
          <UserInfoLogin />
        </Route>
      </Switch>
    </Router>
  );
}
