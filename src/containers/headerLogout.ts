/* eslint-disable import/extensions */
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
import HeaderLogout from '../components/headerLogout';

interface MapState {
   loginStatus: boolean;
   loadingInfo: boolean;
   getFriendsLoading: boolean; }
function mapStateToProps(state: MapState): object {
  return {
    loginStatus: state.loginStatus,
    loadingInfo: state.loadingInfo,
    getFriendsLoading: state.getFriendsLoading,
  };
}
const mapDispatchToProps = (dispatch: (arg0: object) => object): object => ({
  logoutUser: (): object => dispatch(logoutUser()),
  getInfoFromAccount: (): object => dispatch(getInfoFromAccount()),
  loginOAuthVK: (): object => dispatch(loginOAuthVK()),
  setAutorisationSuccess: (value: string): object => dispatch(setAutorisationSuccess(value)),
  setAutorisationFailure: (): object => dispatch(setAutorisationFailure()),
  checkAutorisation: (): object => dispatch(checkAutorisation()),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Object(HeaderLogout)));
