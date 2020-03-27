import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {
  Header,
  ButtonStyled,
  ButtonStyledGet,
  TextStyledHeader,
} from '../styled';

/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

export default class HeaderComponent extends React.Component {
  componentDidMount() {
    const {
      setAutorisationSuccess,
      setAutorisationFailure,
      checkAutorisation,
    } = this.props;
    checkAutorisation();
    if (localStorage.isAuth === 'true') {
      setAutorisationSuccess();
    } else setAutorisationFailure();
  }

  checkUserLogin = () => {
    const { loginStatus } = this.props;
    if (loginStatus) this.getLogoutVk();
    else this.getAuthorisationVk();
  }

  getAuthorisationVk = () => {
    const { loginOAuthVK } = this.props;
    loginOAuthVK();
  };

    getInfoUser = () => {
      const { getInfoFromAccount } = this.props;
      getInfoFromAccount();
    };

      getLogoutVk = async () => {
        const { logoutUser } = this.props;
        logoutUser();
      };

      render() {
        const { loginStatus, loadingInfo, getFriendsLoading } = this.props;
        return (
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Header>
                <TextStyledHeader>
                  Welcome
                </TextStyledHeader>

                <ButtonStyled
                  variant="contained"
                  color="primary"
                  onClick={this.checkUserLogin}
                >
                  {loginStatus
                    ? 'Logout' : 'Login'}
                </ButtonStyled>

                {loginStatus
                  && (
                    <ButtonStyledGet
                      disabled={!(loadingInfo && getFriendsLoading)}
                      variant="contained"
                      color="primary"
                      onClick={this.getInfoUser}
                    >
                      Получить данные
                    </ButtonStyledGet>
                  )}
              </Header>
            </Grid>
          </Grid>
        );
      }
}

HeaderComponent.propTypes = {
  loginStatus: PropTypes.bool,
  loadingInfo: PropTypes.bool,
  getFriendsLoading: PropTypes.bool,
  logoutUser: PropTypes.func.isRequired,
  getInfoFromAccount: PropTypes.func.isRequired,
  loginOAuthVK: PropTypes.func.isRequired,
  setAutorisationSuccess: PropTypes.func.isRequired,
  setAutorisationFailure: PropTypes.func.isRequired,
  checkAutorisation: PropTypes.func.isRequired,
};
HeaderComponent.defaultProps = {
  loginStatus: false,
  loadingInfo: true,
  getFriendsLoading: true,
};
