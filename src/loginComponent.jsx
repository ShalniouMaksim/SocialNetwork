import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {
  Header,
  Footer,
  ButtonStyled,
  TextStyledHeader,
} from './styled';
import { GlobalStyle } from './globalstyles';
import VK from './containerVK';

/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

export default class Login extends React.Component {
    getAuthorisationVk = () => {
      const { loginOAuthVK } = this.props;
      loginOAuthVK();
    };

    render() {
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

Login.propTypes = {
  loginOAuthVK: PropTypes.func.isRequired,
};
Login.defaultProps = {
};
