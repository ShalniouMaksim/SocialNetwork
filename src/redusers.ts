/* eslint-disable import/extensions */
/* eslint-disable camelcase */
import { isType, actionCreatorFactory } from 'typescript-fsa';
import { StoreInterface, State } from './interfaces';

const actionCreator = actionCreatorFactory();

const initialState: State = {
  firstName: '',
  lastName: '',
  status: '',
  photo: '',
  sid: '',
  loginStatus: false,
  loadingInfo: false,
  getFriendsLoading: false,
  friends: [],
};

const setFirstName = actionCreator<string>('SET_FIRST_NAME');
const setLastName = actionCreator<string>('SET_LAST_NAME');
const setStatus = actionCreator<string>('SET_STATUS');
const setUrlPhoto = actionCreator<string>('SET_URL_PHOTO');
const setAuthorisationSuccess = actionCreator<string>('SET_AUTORISATION_SUCCESS');
const setAuthorisationStarted = actionCreator<string>('SET_AUTORISATION_STARTED');
const setAuthorisationFailure = actionCreator<string>('SET_AUTORISATION_FAILURE');
const getFriendsStarted = actionCreator<string>('GET_FRIENDS_STARTED');
const getFriendsSuccess = actionCreator<string>('GET_FRIENDS_SUCCESS');
const getFriendsFailure = actionCreator<string>('GET_FRIENDS_FAILURE');
const getAccountInfoSuccess = actionCreator<string>('GET_ACCOUNT_INFO_SUCCESS');
const getAccountInfoStarted = actionCreator<string>('GET_ACCOUNT_INFO_STARTED');
const getAccountInfoFailure = actionCreator<string>('GET_ACCOUNT_INFO_FAILURE');
const setLogoutStarted = actionCreator<string>('SET_LOGOUT_STARTED');
const setLogoutFailure = actionCreator<string>('SET_LOGOUT_FAILURE');
const setLogoutSuccess = actionCreator<string>('SET_LOGOUT_SUCCESS');

export default function reducer(state = initialState, action: StoreInterface): State {
  if (isType(action, setFirstName)) {
    return { ...state, firstName: action.firstName };
  } if (isType(action, setLastName)) {
    return {
      ...state,
      lastName: action.lastName,
    };
  } if (isType(action, setStatus)) {
    return { ...state, status: action.status };
  } if (isType(action, setUrlPhoto)) {
    return {
      ...state,
      photo: action.photo,
    };
  } if (isType(action, setAuthorisationSuccess)) {
    return {
      ...state,
      sid: action.sid,
      loginStatus: true,
    };
  } if (isType(action, setAuthorisationStarted)) {
    return {
      ...state,
      loginStatus: false,
    };
  } if (isType(action, setAuthorisationFailure)) {
    return { ...state, loginStatus: false };
  } if (isType(action, getFriendsStarted)) {
    return {
      ...state,
      getFriendsLoading: false,
    };
  } if (isType(action, getFriendsSuccess)) {
    return {
      ...state,
      getFriendsLoading: true,
      friends: action.friends,
    };
  } if (isType(action, getFriendsFailure)) {
    return {
      ...state,
      getFriendsLoading: true,
    };
  } if (isType(action, getAccountInfoSuccess)) {
    return {
      ...state,
      loadingInfo: true,
    };
  } if (isType(action, getAccountInfoStarted)) {
    return { ...state, loadingInfo: false };
  } if (isType(action, getAccountInfoFailure)) {
    return {
      ...state,
      loadingInfo: true,
      getFriendsLoading: true,
    };
  } if (isType(action, setLogoutStarted)) {
    return {
      ...state,
      getFriendsLoading: true,
      loginStatus: true,
    };
  }
  if (isType(action, setLogoutFailure)) {
    return {
      ...state,
      loginStatus: true,
    };
  } if (isType(action, setLogoutSuccess)) {
    return {
      ...state,
      loginStatus: false,
    };
  }
  return state;
}
