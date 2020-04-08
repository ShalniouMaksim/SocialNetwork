import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StoreInterface } from '../interfaces';
import {
  Header,
  TextStyledHeader,
  StyledInputForm,
  StyledInputDivs,
  BorderItem,
  StyledInputButton,
} from '../styled';

export default class HeaderComponent extends React.Component<StoreInterface> {
  componentDidUpdate(): void {
    const { history } = this.props;
    if (localStorage.isAuth === 'true') history.push('/logout');
  }

  getAuthorisationVk = (): void => {
    const { loginOAuthVK } = this.props;
    loginOAuthVK();
  };

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Header>
            <TextStyledHeader>Welcome</TextStyledHeader>
          </Header>
          <StyledInputForm container>
            <BorderItem>
              <StyledInputDivs>
                <TextField label="Login" />
              </StyledInputDivs>
              <StyledInputDivs>
                <TextField label="Password" type="password" />
              </StyledInputDivs>
              <StyledInputButton>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.getAuthorisationVk}
                >
                  Login
                </Button>
              </StyledInputButton>
            </BorderItem>
          </StyledInputForm>
        </Grid>
      </Grid>
    );
  }
}
