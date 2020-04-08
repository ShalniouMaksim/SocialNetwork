/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { loginOAuthVK, setAutorisationSuccess, logoutUser } from '../actions';
import UserInfo from '../components/userInfoLogin';
import {
  StoreInterface, MapStateToPropsUserInfo,
  AutorisationSuccess, ActionType,
  CompDispatchPropsUserInfo,
} from '../interfaces';

function mapStateToProps(state: StoreInterface): MapStateToPropsUserInfo {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    status: state.status,
    photo: state.photo,
    sid: state.sid,
    loginStatus: state.loginStatus,
    friends: state.friends,
  };
}

const mapDispatchToProps = (dispatch: Dispatch): CompDispatchPropsUserInfo => ({
  loginOAuthVK: (): ActionType => dispatch(loginOAuthVK()),
  setAutorisationSuccess: (value: string):
  AutorisationSuccess => dispatch(setAutorisationSuccess(value)),
  logoutUser: (): ActionType => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Object(UserInfo));
