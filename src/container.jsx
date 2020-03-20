import { connect } from 'react-redux';
import { authorisationOAuth, getAutorisationSuccess, logoutUser } from './actions';
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
  authorisationOAuth: () => dispatch(authorisationOAuth()),
  getAutorisationSuccess: (value) => dispatch(getAutorisationSuccess(value)),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VK);
