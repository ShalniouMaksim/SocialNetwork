export function authorisationOAuth() {
  return {
    type: 'OAUTH_AUTHORISATION',
  };
}

export function setFirstName(firstName) {
  return {
    type: 'SET_FIRST_NAME',
    firstName,
  };
}

export function setLastName(lastName) {
  return {
    type: 'SET_LAST_NAME',
    lastName,
  };
}

export function getInfoFromAccount() {
  return {
    type: 'GET_INFO_FROM_ACCOUNT',
  };
}

export function setStatus(status) {
  return {
    type: 'SET_STATUS',
    status,
  };
}

export function setUrlPhoto(photo) {
  return {
    type: 'SET_URL_PHOTO',
    photo,
  };
}

export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
  };
}

export function setAutorisationSuccess(sid) {
  return {
    type: 'SET_AUTORISATION_SUCCESS',
    sid,
  };
}

export function setAutorisationStarted() {
  return {
    type: 'SET_AUTORISATION_STARTED',
  };
}

export function checkAutorisation() {
  return {
    type: 'CHECK_AUTORISATION',
  };
}

export function setAutorisationFailure() {
  return {
    type: 'SET_AUTORISATION_FAILURE',
  };
}

export function getAccountInfoSuccess() {
  return {
    type: 'GET_ACCOUNT_INFO_SUCCESS',
  };
}

export function getAccountInfoStarted() {
  return {
    type: 'GET_ACCOUNT_INFO_STARTED',
  };
}

export function getAccountInfoFailure() {
  return {
    type: 'GET_ACCOUNT_INFO_FAILURE',
  };
}

export function getFriendsStarted() {
  return {
    type: 'GET_FRIENDS_STARTED',
  };
}

export function getFriendsSuccess(friends) {
  return {
    type: 'GET_FRIENDS_SUCCESS',
    friends,
  };
}

export function getFriendsFailure() {
  return {
    type: 'GET_FRIENDS_FAILURE',
  };
}

export function setLogoutStarted() {
  return {
    type: 'SET_LOGOUT_STARTED',
  };
}

export function setLogoutFailure() {
  return {
    type: 'SET_LOGOUT_FAILURE',
  };
}

export function setLogoutSuccess() {
  return {
    type: 'SET_LOGOUT_SUCCESS',
  };
}
