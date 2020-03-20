export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'SET_FIRST_NAME':
      return {
        ...state,
        firstName: action.firstName,
      };
    case 'SET_LAST_NAME':
      return {
        ...state,
        lastName: action.lastName,
      };
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'SET_URL_PHOTO':
      return {
        ...state,
        photo: action.photo,
      };
    case 'GET_AUTORISATION_SUCCESS':
      return {
        ...state,
        sid: action.sid,
        loginStatus: true,
      };
    case 'GET_AUTORISATION_STARTED':
      return {
        ...state,
        loginStatus: false,
      };
    case 'GET_AUTORISATION_FAILURE':
      return {
        ...state,
        loginStatus: false,
      };
    case 'GET_FRIENDS_STARTED':
      return {
        ...state,
        getFriends: false,
      };
    case 'GET_FRIENDS_SUCCESS':
      return {
        ...state,
        getFriends: true,
        friends: action.friends,
      };
    case 'GET_FRIENDS_FAILURE':
      return {
        ...state,
        getFriends: false,
      };
    case 'GET_ACCOUNT_INFO_SUCCESS':
      return {
        ...state,
        info: true,
      };
    case 'GET_ACCOUNT_INFO_STARTED':
      return {
        ...state,
        info: false,
      };
    case 'GET_ACCOUNT_INFO_FAILURE':
      return {
        ...state,
        info: false,
      };
    case 'GET_LOGOUT_STARTED':
      return {
        ...state,
        loginStatus: true,
      };
    case 'GET_LOGOUT_FAILURE':
      return {
        ...state,
        loginStatus: true,
      };
    case 'GET_LOGOUT_SUCCESS':
      return {
        ...state,
        loginStatus: false,
      };

    default:
      return state;
  }
}
