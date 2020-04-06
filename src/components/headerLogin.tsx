/* eslint-disable react/jsx-filename-extension */
import React, { ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import { History } from 'history';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  Header,
  TextStyledHeader,
  StyledInputForm,
  StyledInputDivs,
  BorderItem,
} from '../styled';

/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */
interface Props {
  getInfoFromAccount: () => void;
  checkAutorisation: () => void;
  loginStatus: boolean;
  history: History;
  getInformationFromAccount: () => void;
  logoutUser: () => void;
  loadingInfo: boolean;
  getFriendsLoading: () => void;
  loginOAuthVK: () => void;
}
export default class HeaderComponent extends React.Component<Props> {
  componentDidUpdate(): void {
    const { loginStatus, history }: Props = this.props;
    if (loginStatus) history.push('/logout');
  }

  getAuthorisationVk = (): void => {
    const { loginOAuthVK }: Props = this.props;
    loginOAuthVK();
  };

  render(): ReactElement<Props> {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header>
            <TextStyledHeader>Welcome</TextStyledHeader>
          </Header>
          <StyledInputForm container align="center" justify="center">
            <BorderItem>
              <StyledInputDivs>
                <TextField label="Login" />
              </StyledInputDivs>
              <StyledInputDivs>
                <TextField label="Password" type="password" />
              </StyledInputDivs>
              <StyledInputDivs>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.getAuthorisationVk}
                >
                  Login
                </Button>
              </StyledInputDivs>
            </BorderItem>
          </StyledInputForm>
        </Grid>
      </Grid>
    );
  }
}
