import { isType } from 'typescript-fsa';
import { StoreInterface, State } from './interfaces';
import
{
  setFirstName, setLastName, setStatus,
  setUrlPhoto, setAutorisationSuccess, setAutorisationStarted,
  setAutorisationFailure, getFriendsStarted, getFriendsSuccess,
  getFriendsFailure, getAccountInfoSuccess, getAccountInfoStarted,
  setLogoutStarted, getAccountInfoFailure, setLogoutFailure,
  setLogoutSuccess,
} from './actions';

const initialState: State = {
  firstName: '',
  lastName: '',
  status: false,
  Auth: false,
  photo: '',
  sid: '',
  loginStatus: false,
  loadingInfo: false,
  getFriendsLoading: false,
  friends: [],
};

export default function reducer(state = initialState, action: StoreInterface): State {
  if (isType(action, setFirstName)) {
    return { ...state, firstName: action.payload };
  } if (isType(action, setLastName)) {
    return {
      ...state,
      lastName: action.payload,
    };
  } if (isType(action, setStatus)) {
    return { ...state, status: action.payload };
  } if (isType(action, setUrlPhoto)) {
    return {
      ...state,
      photo: action.payload,
    };
  } if (isType(action, setAutorisationSuccess)) {
    return {
      ...state,
      sid: action.payload,
      loginStatus: true,
      Auth: true,
    };
  } if (isType(action, setAutorisationStarted)) {
    return {
      ...state,
      loginStatus: false,
    };
  } if (isType(action, setAutorisationFailure)) {
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
      friends: action.payload,
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
      Auth: false,
    };
  }
  return state;
}
