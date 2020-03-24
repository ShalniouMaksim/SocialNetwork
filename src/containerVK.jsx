import { connect } from 'react-redux';
import {
  authorisationOAuth, setAutorisationSuccess, logoutUser,
  setAutorisationFailure, checkAutorisation, getInfoFromAccount,
} from './actions';
import Component from './component';

function mapStateToProps(state) {
  return {
    loginStatus: state.loginStatus,
  };
}
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  getInfoFromAccount: () => dispatch(getInfoFromAccount()),
  authorisationOAuth: () => dispatch(authorisationOAuth()),
  setAutorisationSuccess: () => dispatch(setAutorisationSuccess()),
  setAutorisationFailure: () => dispatch(setAutorisationFailure()),
  checkAutorisation: () => dispatch(checkAutorisation()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
