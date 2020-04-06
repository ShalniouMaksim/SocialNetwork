/* eslint-disable import/extensions */
/* eslint-disable camelcase */

import { connect } from 'react-redux';
import { loginOAuthVK, setAutorisationSuccess, logoutUser } from '../actions';
import UserInfo from '../components/userInfoLogin';

interface FriendsInterface {
  id: string;
  first_name: string;
  photo_200_orig: string;
  last_name: string;
  online: string;
}
interface MapState {
  firstName: string;
  lastName: string;
  status: string;
  photo: string;
  sid: string;
  loginStatus: string;
  friends: FriendsInterface; }
function mapStateToProps(state: MapState): object {
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

const mapDispatchToProps = (dispatch:
  (arg0: object) => object): object => ({
  loginOAuthVK: (): object => dispatch(loginOAuthVK()),
  setAutorisationSuccess: (value: string): object => dispatch(setAutorisationSuccess(value)),
  logoutUser: (): object => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Object(UserInfo));
