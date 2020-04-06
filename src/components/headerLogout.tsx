/* eslint-disable react/jsx-filename-extension */
import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { History } from 'history';
import {
  Header,
  ButtonStyled,
  ButtonStyledGet,
  TextStyledHeader,
} from '../styled';

interface Props {
  getInfoFromAccount: () => void;
  checkAutorisation: () => void;
  loginStatus: boolean;
  history: History;
  getInformationFromAccount: () => void;
  logoutUser: () => void;
  loadingInfo: boolean;
  getFriendsLoading: () => void;
}
/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

export default class HeaderComponent extends React.Component<Props> {
  componentDidMount(): void {
    const { checkAutorisation }: Props = this.props;
    checkAutorisation();
  }

  componentDidUpdate(): void {
    const { loginStatus, history }: Props = this.props;
    if (!loginStatus) history.push('/auth');
  }

  getInfoUser = (): void => {
    const { getInfoFromAccount }: Props = this.props;
    getInfoFromAccount();
  };

  getLogoutVk = (): void => {
    const { logoutUser }: Props = this.props;
    logoutUser();
  };

  render(): ReactElement<Props> {
    const { loadingInfo, getFriendsLoading }: Props = this.props;
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
