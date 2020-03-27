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
import VK from './containerVK';

/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

export default class Logout extends React.Component {
    getInfoUser = () => {
      const { getInfoFromAccount } = this.props;
      getInfoFromAccount();
    };

      getLogoutVk = async () => {
        const { logoutUser } = this.props;
        logoutUser();
      };

      render() {
        const { loadingInfo, getFriendsLoading } = this.props;
        return (
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
        );
      }
}

Logout.propTypes = {
  loadingInfo: PropTypes.bool,
  getFriendsLoading: PropTypes.bool,
  logoutUser: PropTypes.func.isRequired,
  getInfoFromAccount: PropTypes.func.isRequired,
};
Logout.defaultProps = {
  loadingInfo: true,
  getFriendsLoading: true,
};
