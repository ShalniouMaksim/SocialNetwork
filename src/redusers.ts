/* eslint-disable camelcase */
const initialState = {
  firstname: '',
  lastName: '',
  status: '',
  photo: '',
  sid: '',
  loginStatus: false,
  loadingInfo: false,
  getFriendsLoading: false,
  friends: [{}],
};
interface FriendsInterface {
  id: string;
  first_name: string;
  photo_200_orig: string;
  last_name: string;
  online: string;
}

interface StateInterface {
  type: string;
  firstName: string;
  lastName: string;
  status: string;
  photo: string;
  sid: string;
  loginStatus: boolean,
  loadingInfo: boolean,
  getFriendsLoading: boolean;
  friends: Array<FriendsInterface>;
}
export default function reducer(state = initialState, action: StateInterface): object {
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
    case 'SET_AUTORISATION_SUCCESS':
      return {
        ...state,
        sid: action.sid,
        loginStatus: true,
      };
    case 'SET_AUTORISATION_STARTED':
      return {
        ...state,
        loginStatus: false,
      };
    case 'SET_AUTORISATION_FAILURE':
      return {
        ...state,
        loginStatus: false,
      };
    case 'GET_FRIENDS_STARTED':
      return {
        ...state,
        getFriendsLoading: false,
      };
    case 'GET_FRIENDS_SUCCESS':
      return {
        ...state,
        getFriendsLoading: true,
        friends: action.friends,
      };
    case 'GET_FRIENDS_FAILURE':
      return {
        ...state,
        getFriendsLoading: true,
      };
    case 'GET_ACCOUNT_INFO_SUCCESS':
      return {
        ...state,
        loadingInfo: true,
      };
    case 'GET_ACCOUNT_INFO_STARTED':
      return {
        ...state,
        loadingInfo: false,
      };
    case 'GET_ACCOUNT_INFO_FAILURE':
      return {
        ...state,
        loadingInfo: true,
        getFriendsLoading: true,
      };
    case 'SET_LOGOUT_STARTED':
      return {
        ...state,
        loginStatus: true,
      };
    case 'SET_LOGOUT_FAILURE':
      return {
        ...state,
        loginStatus: true,
      };
    case 'SET_LOGOUT_SUCCESS':
      return {
        ...state,
        loginStatus: false,
      };

    default:
      return state;
  }
}
