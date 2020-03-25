import { connect } from 'react-redux';
import {
  loginOAuthVK, setAutorisationSuccess, logoutUser,
  setAutorisationFailure, checkAutorisation, getInfoFromAccount,
} from './actions';
import Component from './component';

function mapStateToProps(state) {
  return {
    loginStatus: state.loginStatus,
    loadingInfo: state.loadingInfo,
    getFriendsLoading: state.getFriendsLoading,
  };
}
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  getInfoFromAccount: () => dispatch(getInfoFromAccount()),
  loginOAuthVK: () => dispatch(loginOAuthVK()),
  setAutorisationSuccess: () => dispatch(setAutorisationSuccess()),
  setAutorisationFailure: () => dispatch(setAutorisationFailure()),
  checkAutorisation: () => dispatch(checkAutorisation()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
