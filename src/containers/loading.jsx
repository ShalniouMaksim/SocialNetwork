import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setAutorisationSuccess,
  setAutorisationFailure,
  checkAutorisation,
} from '../actions';
import Loading from '../components/loading';

function mapStateToProps(state) {
  return {
    loginStatus: state.loginStatus,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setAutorisationSuccess: () => dispatch(setAutorisationSuccess()),
  setAutorisationFailure: () => dispatch(setAutorisationFailure()),
  checkAutorisation: () => dispatch(checkAutorisation()),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Loading));
