import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  ImgAvatar,
  ImgFriend,
  TableStyle,
  TextColorRed,
  TextCenter,
} from './styled';

export default class VK extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const {
      firstName,
      lastName,
      status,
      photo,
      friends,
      loginStatus,
    } = this.props;
    return (
      (loginStatus)
        ? (
          <Grid container spacing={1}>
            <Grid item xs={12} />
            <Grid item xs={12} />
            <Grid item xs={12} />
            <Grid item xs={12} />
            <Grid item xs={12} />
            <Grid item xs={12} />
            <Grid item xs={12}>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <TextCenter>{`${firstName} ${lastName} ${status}`}</TextCenter>
              </Grid>
              <Grid item xs={12}>
                {photo && <ImgAvatar src={photo} />}
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
                              <ImgFriend src={friend.photo_200_orig} />
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
          </Grid>
        )
        : <Grid />
    );
  }
}
VK.propTypes = {
  photo: PropTypes.string,
  status: PropTypes.string,
  lastName: PropTypes.string,
  firstName: PropTypes.string,
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
