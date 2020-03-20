import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { logoutUser } from './actions';
import {
  Header, Footer, ButtonStyled,
} from './styled';
import { GlobalStyle } from './globalstyles';
import VK from './container';

/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

class Component extends React.Component {
    getLogoutVk = () => {
      const { logoutUser: logout } = this.props;
      logout();
    };

    render() {
      const { loginStatus } = this.props;
      return (
        (loginStatus)
          ? (
            <Grid container spacing={1}>
              <GlobalStyle />
              <Grid item xs={3}>
                <Header>
                  <Grid item xs={3} />
                  <Grid item xs={3} />
                  <Grid item xs={3}>
Welcome
                  </Grid>
                  <Grid item xs={3} />
                  <Grid item xs={3}>
                    <ButtonStyled>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.getLogoutVk}
                      >
                        {' '}
                Logout
                      </Button>
                    </ButtonStyled>
                  </Grid>

                </Header>
              </Grid>
              <VK />
              <Grid item xs={12}>
                <Footer>POTUX</Footer>
              </Grid>
            </Grid>
          )
          : (
            <Grid container spacing={1}>
              <GlobalStyle />
              <Grid item xs={12}>
                <Header>Welcome</Header>
              </Grid>
              <VK />
              <Grid item xs={12}>
                <Footer>POTUX</Footer>
              </Grid>
            </Grid>
          )
      );
    }
}

Component.propTypes = {
  loginStatus: PropTypes.bool,
  logoutUser: PropTypes.func.isRequired,
};
Component.defaultProps = {
  loginStatus: false,
};

function mapStateToProps(state) {
  return {
    loginStatus: state.loginStatus,
  };
}
const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
