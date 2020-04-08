/* eslint-disable import/extensions */
/* eslint-disable camelcase */
// eslint-disable-next-line import/extensions
import {
  FirstName, LastName, Status,
  FriendsSuccess, UrlPhoto, ActionType,
  AutorisationSuccess, FriendsInterface,
} from './interfaces';


export function loginOAuthVK(): ActionType {
  return {
    type: 'LOGIN_OAUTH_VK',
  };
}

export function setFirstName(firstName: string): FirstName {
  return {
    type: 'SET_FIRST_NAME',
    firstName,
  };
}

export function setLastName(lastName: string): LastName {
  return {
    type: 'SET_LAST_NAME',
    lastName,
  };
}

export function getInfoFromAccount(): ActionType {
  return {
    type: 'GET_INFO_FROM_ACCOUNT',
  };
}

export function setStatus(status: string): Status {
  return {
    type: 'SET_STATUS',
    status,
  };
}

export function setUrlPhoto(photo: string): UrlPhoto {
  return {
    type: 'SET_URL_PHOTO',
    photo,
  };
}

export function logoutUser(): ActionType {
  return {
    type: 'LOGOUT_USER',
  };
}

export function setAutorisationSuccess(sid: string): AutorisationSuccess {
  return {
    type: 'SET_AUTORISATION_SUCCESS',
    sid,
  };
}

export function setAutorisationStarted(): ActionType {
  return {
    type: 'SET_AUTORISATION_STARTED',
  };
}

export function checkAutorisation(): ActionType {
  return {
    type: 'CHECK_AUTORISATION',
  };
}

export function setAutorisationFailure(): ActionType {
  return {
    type: 'SET_AUTORISATION_FAILURE',
  };
}

export function getAccountInfoSuccess(): ActionType {
  return {
    type: 'GET_ACCOUNT_INFO_SUCCESS',
  };
}

export function getAccountInfoStarted(): ActionType {
  return {
    type: 'GET_ACCOUNT_INFO_STARTED',
  };
}

export function getAccountInfoFailure(): ActionType {
  return {
    type: 'GET_ACCOUNT_INFO_FAILURE',
  };
}

export function getFriendsStarted(): ActionType {
  return {
    type: 'GET_FRIENDS_STARTED',
  };
}

export function getFriendsSuccess(friends: FriendsInterface):FriendsSuccess {
  return {
    type: 'GET_FRIENDS_SUCCESS',
    friends,
  };
}

export function getFriendsFailure(): ActionType {
  return {
    type: 'GET_FRIENDS_FAILURE',
  };
}

export function setLogoutStarted(): ActionType {
  return {
    type: 'SET_LOGOUT_STARTED',
  };
}

export function setLogoutFailure(): ActionType {
  return {
    type: 'SET_LOGOUT_FAILURE',
  };
}

export function setLogoutSuccess(): ActionType {
  return {
    type: 'SET_LOGOUT_SUCCESS',
  };
}
