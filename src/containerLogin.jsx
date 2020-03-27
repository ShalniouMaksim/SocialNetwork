import { connect } from 'react-redux';
import {
  loginOAuthVK,
} from './actions';
import Login from './loginComponent';

function mapStateToProps() {
  return {
  };
}
const mapDispatchToProps = (dispatch) => ({
  loginOAuthVK: () => dispatch(loginOAuthVK()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
