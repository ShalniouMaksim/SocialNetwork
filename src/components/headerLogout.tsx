import React from 'react';
import Grid from '@material-ui/core/Grid';
import { StoreInterface } from '../interfaces';
import {
  Header,
  ButtonStyled,
  ButtonStyledGet,
  TextStyledHeader,
} from '../styled';

export default class HeaderComponent extends React.Component<StoreInterface> {
  componentDidMount(): void {
    const { checkAutorisation } = this.props;
    checkAutorisation();
  }

  componentDidUpdate(): void {
    const { history } = this.props;
    if (localStorage.isAuth !== 'true') history.push('/auth');
  }

  getInfoUser = (): void => {
    const { getInfoFromAccount } = this.props;
    getInfoFromAccount();
  };

  getLogoutVk = (): void => {
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
