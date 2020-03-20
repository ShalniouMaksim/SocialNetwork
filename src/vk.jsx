import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  Img, Imged, TableStyle, TextColorRed, TextCenter,
} from './styled';

/* {import App from './App';
import * as serviceWorker from './serviceWorker';} */

export default class VK extends React.Component {
  getAuthorisationVk = () => {
    const { authorisationOAuth } = this.props;
    authorisationOAuth();
  };

  render() {
    const {
      firstName,
      lastName,
      status,
      photo,
      loginStatus,
      friends,
    } = this.props;
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} />
        <Grid item xs={12} />
        <Grid item xs={12} />
        <Grid item xs={12} />
        <Grid item xs={12} />
        {!loginStatus ? (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.getAuthorisationVk}
            >
              {' '}
              Login
            </Button>
            {' '}
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Grid item xs={12}>
              {' '}
            </Grid>
            <Grid item xs={12}>
              <TextCenter>{`${firstName} ${lastName} ${status}`}</TextCenter>
            </Grid>
            <Grid item xs={12}>
              {photo && <Img src={photo} />}
            </Grid>
            <TableStyle>
              <Grid item xs={12}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Photo</TableCell>
                      <TableCell align="left">id</TableCell>
                      <TableCell align="left">Firstname</TableCell>
                      <TableCell align="left">Lastname</TableCell>
                      <TableCell align="left">onlinestatus</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {friends[0].id ? (
                      friends.map((friend) => (friend.first_name !== 'DELETED' ? (
                        <TableRow key={friend.id}>
                          <TableCell align="left">
                            <Imged src={friend.photo_200} />
                          </TableCell>
                          <TableCell align="left">{friend.id}</TableCell>
                          <TableCell align="left">
                            {friend.first_name}
                          </TableCell>
                          <TableCell align="left">
                            {friend.last_name}
                          </TableCell>
                          {friend.online ? (
                            <TableCell align="left">Online</TableCell>
                          ) : (
                            <TableCell align="left">
                              <TextColorRed>Offline</TextColorRed>
                            </TableCell>
                          )}
                        </TableRow>
                      ) : (
                        <TableRow key={friend.id} />
                      )))
                    ) : (
                      <TableRow />
                    )}
                  </TableBody>
                </Table>
              </Grid>
            </TableStyle>
          </Grid>
        )}
      </Grid>
    );
  }
}
VK.propTypes = {
  photo: PropTypes.string,
  status: PropTypes.string,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
  authorisationOAuth: PropTypes.func.isRequired,
  loginStatus: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.shape()),
};
VK.defaultProps = {
  photo: '',
  status: '',
  lastName: '',
  firstName: '',
  loginStatus: false,
  friends: [
    {
      id: '',
      photo_200: '',
      first_name: '',
      last_name: '',
      online: '',
    },
  ],
};
