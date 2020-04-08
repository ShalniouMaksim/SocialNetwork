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
import HeaderLogin from '../components/headerLogin';
import {
  StoreInterface, MapStateToPropsLogin,
  ActionType, CompDispatchPropsUserLogin,
} from '../interfaces';

function mapStateToProps(state: StoreInterface): MapStateToPropsLogin {
  return {
    loginStatus: state.loginStatus,
    loadingInfo: state.loadingInfo,
    getFriendsLoading: state.getFriendsLoading,
  };
}
const mapDispatchToProps = (dispatch: Dispatch): CompDispatchPropsUserLogin => ({
  logoutUser: (): ActionType => dispatch(logoutUser()),
  getInfoFromAccount: (): ActionType => dispatch(getInfoFromAccount()),
  loginOAuthVK: (): ActionType => dispatch(loginOAuthVK()),
  setAutorisationSuccess: (value: string):ActionType => dispatch(setAutorisationSuccess(value)),

  setAutorisationFailure: (): ActionType => dispatch(setAutorisationFailure()),
  checkAutorisation: (): ActionType => dispatch(checkAutorisation()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Object(HeaderLogin)));
