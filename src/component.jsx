import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {
  Header, Footer, ButtonStyled,
} from './styled';
import { GlobalStyle } from './globalstyles';
import VK from './container';


/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

export default class Component extends React.Component {
  componentDidMount() {
    const {
      getAutorisationSuccess: getAutorisationSuccesses,
      getAutorisationFailure: getAutorisationFailures,
      getAutorisation: getAutorisationStart,
    } = this.props;
    getAutorisationStart();
    if (localStorage.loc === 'true') {
      getAutorisationSuccesses();
    } else getAutorisationFailures();
  }

    getAuthorisationVk = () => {
      const { authorisationOAuth: oAuth } = this.props;
      oAuth();
    };

    getInfoUser = () => {
      const { getGet: get } = this.props;
      get();
    }

    getLogoutVk = async () => {
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.getInfoUser}
                >
                  {' '}
                Получить данные
                </Button>
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
                        onClick={this.getAuthorisationVk}
                      >
                        {' '}
              Login
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
      );
    }
}

Component.propTypes = {
  loginStatus: PropTypes.bool,
  logoutUser: PropTypes.func.isRequired,
  authorisationOAuth: PropTypes.func.isRequired,
  getAutorisationSuccess: PropTypes.func.isRequired,
  getAutorisationFailure: PropTypes.func.isRequired,
  getAutorisation: PropTypes.func.isRequired,
  getGet: PropTypes.func.isRequired,
};
Component.defaultProps = {
  loginStatus: false,
};
