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
    const { checkAutorisation } = this.props;
    checkAutorisation();
  }

  componentDidUpdate() {
    const { loginStatus, history } = this.props;
    if (!loginStatus) history.push('/auth');
  }

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
        <Grid item xs={12}>
          <Header>
            <TextStyledHeader>Welcome</TextStyledHeader>
          </Header>
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
        </Grid>
      </Grid>
    );
  }
}

HeaderComponent.propTypes = {
  history: PropTypes.shape([]).isRequired,
  loginStatus: PropTypes.bool,
  loadingInfo: PropTypes.bool,
  getFriendsLoading: PropTypes.bool,
  logoutUser: PropTypes.func.isRequired,
  getInfoFromAccount: PropTypes.func.isRequired,
  checkAutorisation: PropTypes.func.isRequired,
};
HeaderComponent.defaultProps = {
  loginStatus: false,
  loadingInfo: true,
  getFriendsLoading: true,
};
