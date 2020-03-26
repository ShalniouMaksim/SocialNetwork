import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {
  Header,
  Footer,
  ButtonStyled,
  ButtonStyledGet,
  TextStyledHeader,
} from './styled';
import { GlobalStyle } from './globalstyles';
import VK from './container';

/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

export default class Component extends React.Component {
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
    return loginStatus ? (
      <Grid container spacing={1}>
        <GlobalStyle />
        <Grid item xs={3}>
          <Header>
            <TextStyledHeader>
              Welcome
            </TextStyledHeader>
            <ButtonStyled
              variant="contained"
              color="primary"
              onClick={this.getLogoutVk}
            >
              Logout
            </ButtonStyled>
            <ButtonStyledGet
              disabled={!(loadingInfo && getFriendsLoading)}
              variant="contained"
              color="primary"
              onClick={this.getInfoUser}
            >
              Получить данные
            </ButtonStyledGet>
          </Header>
        </Grid>
        <VK />
        <Grid item xs={12}>
          <Footer>POTUX</Footer>
        </Grid>
      </Grid>
    ) : (
      <Grid container spacing={1}>
        <GlobalStyle />
        <Grid item xs={3}>
          <Header>
            <TextStyledHeader>
              Welcome
            </TextStyledHeader>
            <ButtonStyled
              variant="contained"
              color="primary"
              onClick={this.getAuthorisationVk}
            >
              Login
            </ButtonStyled>
          </Header>
        </Grid>
        <VK />
        <Grid item xs={12}>
          <Footer>2020</Footer>
        </Grid>
      </Grid>
    );
  }
}

Component.propTypes = {
  loginStatus: PropTypes.bool,
  loadingInfo: PropTypes.bool,
  getFriendsLoading: PropTypes.bool,
  logoutUser: PropTypes.func.isRequired,
  loginOAuthVK: PropTypes.func.isRequired,
  setAutorisationSuccess: PropTypes.func.isRequired,
  setAutorisationFailure: PropTypes.func.isRequired,
  checkAutorisation: PropTypes.func.isRequired,
  getInfoFromAccount: PropTypes.func.isRequired,
};
Component.defaultProps = {
  loadingInfo: true,
  getFriendsLoading: true,
  loginStatus: false,
};
