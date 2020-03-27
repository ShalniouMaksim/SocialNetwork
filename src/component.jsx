import React from 'react';
import PropTypes from 'prop-types';
import Login from './containerLogin';
import Logout from './containerLogout';


/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

export default class Component extends React.Component {
  componentDidMount() {
    const {
      setAutorisationSuccess,
      setAutorisationFailure,
      checkAutorisation,
    } = this.props;
    checkAutorisation();
    if (localStorage.isAuth === 'true') {
      setAutorisationSuccess();
    } else setAutorisationFailure();
  }

  render() {
    const { loginStatus } = this.props;
    return loginStatus ? <Logout /> : <Login />;
  }
}

Component.propTypes = {
  loginStatus: PropTypes.bool,
  setAutorisationSuccess: PropTypes.func.isRequired,
  setAutorisationFailure: PropTypes.func.isRequired,
  checkAutorisation: PropTypes.func.isRequired,
};
Component.defaultProps = {
  loginStatus: false,
};
