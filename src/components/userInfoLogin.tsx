/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
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
  ContainerInfoUser,
  TableStyled,
} from '../styled';
import { StoreInterface, FriendsInterface } from '../interfaces';

const UserInfo = (props: StoreInterface) => {
  const {
    firstName, lastName, status, photo, friends,
  } = props;
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <ContainerInfoUser>
          <TextCenter>{firstName && lastName && status && `${firstName} ${lastName} ${status}`}</TextCenter>
          {photo && <ImgAvatar sizes="small" src={photo} />}
        </ContainerInfoUser>
        <TableStyle>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableStyled align="left">Photo</TableStyled>
                  <TableStyled align="left">id</TableStyled>
                  <TableStyled align="left">Firstname</TableStyled>
                  <TableStyled align="left">Lastname</TableStyled>
                  <TableStyled align="left">onlinestatus</TableStyled>
                </TableRow>
              </TableHead>
              <TableBody>
                {friends
                && friends
                  .filter((friend: FriendsInterface) => friend.id)
                  .map((friend: FriendsInterface) => (
                    <TableRow key={friend.id}>
                      <TableCell align="left">
                        <ImgFriend src={friend.photo_200_orig} />
                      </TableCell>
                      <TableCell align="left">{friend.id}</TableCell>
                      <TableCell align="left">{friend.first_name}</TableCell>
                      <TableCell align="left">{friend.last_name}</TableCell>
                      {friend.online ? (
                        <TableCell align="left">Online</TableCell>
                      ) : (
                        <TableCell align="left">
                          <TextColorRed>Offline</TextColorRed>
                        </TableCell>
                      )}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Grid>
        </TableStyle>
      </Grid>
    </Grid>
  );
};

export default UserInfo;
