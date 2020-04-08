/* eslint-disable import/extensions */
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
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
import {
  StoreInterface, MapStateToPropsLogout, ActionType,
  AutorisationSuccess, CompDispatchPropsUserLogout,
} from '../interfaces';

function mapStateToProps(state: StoreInterface):MapStateToPropsLogout {
  return {
    loginStatus: state.loginStatus,
    loadingInfo: state.loadingInfo,
    getFriendsLoading: state.getFriendsLoading,
  };
}
const mapDispatchToProps = (dispatch: Dispatch): CompDispatchPropsUserLogout => ({
  logoutUser: (): ActionType => dispatch(logoutUser()),
  getInfoFromAccount: (): ActionType => dispatch(getInfoFromAccount()),
  loginOAuthVK: (): ActionType => dispatch(loginOAuthVK()),
  setAutorisationSuccess: (value: string):
  AutorisationSuccess => dispatch(setAutorisationSuccess(value)),
  setAutorisationFailure: (): ActionType => dispatch(setAutorisationFailure()),
  checkAutorisation: (): ActionType => dispatch(checkAutorisation()),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Object(HeaderLogout)));
