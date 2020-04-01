import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
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

export default class HeaderComponent extends React.Component {
  componentDidUpdate() {
    const { loginStatus, history } = this.props;
    if (loginStatus) history.push('/logout');
  }

  getAuthorisationVk = async () => {
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

HeaderComponent.propTypes = {
  history: PropTypes.shape([]).isRequired,
  loginStatus: PropTypes.bool,
  loginOAuthVK: PropTypes.func.isRequired,
};
HeaderComponent.defaultProps = {
  loginStatus: false,
};
