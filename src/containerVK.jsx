import { connect } from 'react-redux';
import {
  authorisationOAuth, getAutorisationSuccess, logoutUser,
  getAutorisationFailure, getAutorisation, getGet,
} from './actions';
import Component from './component';

function mapStateToProps(state) {
  return {
    loginStatus: state.loginStatus,
  };
}
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  getGet: () => dispatch(getGet()),
  authorisationOAuth: () => dispatch(authorisationOAuth()),
  getAutorisationSuccess: () => dispatch(getAutorisationSuccess()),
  getAutorisationFailure: () => dispatch(getAutorisationFailure()),
  getAutorisation: () => dispatch(getAutorisation()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
