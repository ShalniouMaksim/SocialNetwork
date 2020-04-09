import { createBrowserHistory as createHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import HeaderLogin from '../containers/headerLogin';
import UserInfoLogin from '../containers/userInfoLogin';
import HeaderLogout from '../containers/headerLogout';

const browserHistory = createHistory();
export default function RouterComponent(props: { Auth: boolean}) {
  const { Auth } = props;
  useEffect(() => {
    if (localStorage.isAuth === 'true') {
      browserHistory.push('/logout');
    } else browserHistory.push('/auth');
  }, [Auth]);
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
