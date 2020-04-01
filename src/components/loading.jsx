
import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
} from 'react-router-dom';

export default function Loading(props) {
  const {
    setAutorisationSuccess,
    setAutorisationFailure,
  } = props;
  if (localStorage.isAuth === 'true') {
    setAutorisationSuccess();
    return <Redirect to="/logout" />;
  }
  setAutorisationFailure();
  return <Redirect to="/auth" />;
}
Loading.propTypes = {
  setAutorisationSuccess: PropTypes.func.isRequired,
  setAutorisationFailure: PropTypes.func.isRequired,
};
