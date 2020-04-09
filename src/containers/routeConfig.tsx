import { connect } from 'react-redux';
import RouterComponent from '../components/routeConfig';

function mapStateToProps(state: {Auth: boolean}): {Auth: boolean} {
  return {
    Auth: state.Auth,
  };
}

export default connect(mapStateToProps)(Object(RouterComponent));
