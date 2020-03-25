import { connect } from 'react-redux';
import { loginOAuthVK, setAutorisationSuccess, logoutUser } from './actions';
import VK from './vk';

function mapStateToProps(state) {
  return {
    jopa: state.jopa,
    firstName: state.firstName,
    lastName: state.lastName,
    status: state.status,
    photo: state.photo,
    sid: state.sid,
    loginStatus: state.loginStatus,
    friends: state.friends,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginOAuthVK: () => dispatch(loginOAuthVK()),
  setAutorisationSuccess: (value) => dispatch(setAutorisationSuccess(value)),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VK);
