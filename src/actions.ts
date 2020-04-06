/* eslint-disable camelcase */
interface FriendsInterface {
  id: string;
  first_name: string;
  photo_200_orig: string;
  last_name: string;
  online: string;
}

export function loginOAuthVK(): {type: string} {
  return {
    type: 'LOGIN_OAUTH_VK',
  };
}

export function setFirstName(firstName: string): {type: string, firstName: string} {
  return {
    type: 'SET_FIRST_NAME',
    firstName,
  };
}

export function setLastName(lastName: string): {type: string, lastName: string} {
  return {
    type: 'SET_LAST_NAME',
    lastName,
  };
}

export function getInfoFromAccount(): {type: string} {
  return {
    type: 'GET_INFO_FROM_ACCOUNT',
  };
}

export function setStatus(status: string): {type: string, status: string} {
  return {
    type: 'SET_STATUS',
    status,
  };
}

export function setUrlPhoto(photo: string): {type: string, photo: string} {
  return {
    type: 'SET_URL_PHOTO',
    photo,
  };
}

export function logoutUser(): {type: string} {
  return {
    type: 'LOGOUT_USER',
  };
}

export function setAutorisationSuccess(sid: string): {type: string, sid: string} {
  return {
    type: 'SET_AUTORISATION_SUCCESS',
    sid,
  };
}

export function setAutorisationStarted(): {type: string} {
  return {
    type: 'SET_AUTORISATION_STARTED',
  };
}

export function checkAutorisation(): {type: string} {
  return {
    type: 'CHECK_AUTORISATION',
  };
}

export function setAutorisationFailure(): {type: string} {
  return {
    type: 'SET_AUTORISATION_FAILURE',
  };
}

export function getAccountInfoSuccess(): {type: string} {
  return {
    type: 'GET_ACCOUNT_INFO_SUCCESS',
  };
}

export function getAccountInfoStarted(): {type: string} {
  return {
    type: 'GET_ACCOUNT_INFO_STARTED',
  };
}

export function getAccountInfoFailure(): {type: string} {
  return {
    type: 'GET_ACCOUNT_INFO_FAILURE',
  };
}

export function getFriendsStarted(): {type: string} {
  return {
    type: 'GET_FRIENDS_STARTED',
  };
}

export function getFriendsSuccess(friends: FriendsInterface):
 {type: string, friends: FriendsInterface} {
  return {
    type: 'GET_FRIENDS_SUCCESS',
    friends,
  };
}

export function getFriendsFailure(): {type: string} {
  return {
    type: 'GET_FRIENDS_FAILURE',
  };
}

export function setLogoutStarted(): {type: string} {
  return {
    type: 'SET_LOGOUT_STARTED',
  };
}

export function setLogoutFailure(): {type: string} {
  return {
    type: 'SET_LOGOUT_FAILURE',
  };
}

export function setLogoutSuccess(): {type: string} {
  return {
    type: 'SET_LOGOUT_SUCCESS',
  };
}
