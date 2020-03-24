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

export function getGet() {
  return {
    type: 'GET_GET',
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

export function getAutorisationSuccess(sid) {
  return {
    type: 'GET_AUTORISATION_SUCCESS',
    sid,
  };
}

export function getAutorisationStarted() {
  return {
    type: 'GET_AUTORISATION_STARTED',
  };
}

export function getAutorisation() {
  return {
    type: 'GET_AUTORISATION',
  };
}

export function getAutorisationFailure() {
  return {
    type: 'GET_AUTORISATION_FAILURE',
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

export function getLogoutStarted() {
  return {
    type: 'GET_LOGOUT_STARTED',
  };
}

export function getLogoutFailure() {
  return {
    type: 'GET_LOGOUT_FAILURE',
  };
}

export function getLogoutSuccess() {
  return {
    type: 'GET_LOGOUT_SUCCESS',
  };
}
