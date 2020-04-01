import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  logoutUser,
  getInfoFromAccount,
  loginOAuthVK,
  setAutorisationSuccess,
  setAutorisationFailure,
  checkAutorisation,
} from '../actions';
import HeaderLogin from '../components/headerLogin';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(HeaderLogin));
