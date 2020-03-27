import { connect } from 'react-redux';
import {
  logoutUser,
  getInfoFromAccount,
} from './actions';
import Logout from './logoutComponent';

function mapStateToProps(state) {
  return {
    loadingInfo: state.loadingInfo,
    getFriendsLoading: state.getFriendsLoading,
  };
}
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  getInfoFromAccount: () => dispatch(getInfoFromAccount()),

});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
