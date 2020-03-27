import { connect } from 'react-redux';
import {
  setAutorisationSuccess,
  setAutorisationFailure, checkAutorisation,
} from './actions';
import Component from './component';

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

export default connect(mapStateToProps, mapDispatchToProps)(Component);
