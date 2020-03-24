import { call, put, takeEvery } from 'redux-saga/effects';
import {
  setFirstName,
  setLastName,
  setStatus,
  setUrlPhoto,
  getAutorisationSuccess,
  getAutorisationStarted,
  getAutorisationFailure,
  getAccountInfoStarted,
  getAccountInfoFailure,
  getAccountInfoSuccess,
  getFriendsStarted,
  getFriendsSuccess,
  getFriendsFailure,
  getLogoutStarted,
  getLogoutFailure,
  getLogoutSuccess,
  getGet,
} from './actions';
import { vkCall, vkLogin, vkLogout } from './helper';
import apiIdVk from './constants';


const logoutVkFunc = function* logoutVkFunc() {
  yield call(vkCall, 'users.get', {
    v: '5.73',
  });
  yield put(getLogoutStarted());
  const resultLogout = yield call(vkLogout);
  if (resultLogout.session) yield put(getLogoutFailure());
  else {
    yield put(getLogoutSuccess());
    localStorage.setItem('loc', false);
  }
};

const getAccountInfo = function* getAccountInfo() {
  const resultUser = yield call(vkCall, 'users.get', {
    fields: 'online,photo_200',
    v: '5.73',
  });

  if (resultUser.response[0].id) {
    yield put(getAccountInfoSuccess());
    yield put(setFirstName(resultUser.response[0].first_name));
    yield put(setLastName(resultUser.response[0].last_name));
    yield put(setUrlPhoto(resultUser.response[0].photo_200));
    switch (resultUser.response[0].online) {
      case 0:
        yield put(setStatus('Offline'));
        break;
      default:
        yield put(setStatus('Online'));
    }
  } else {
    yield put(getAccountInfoFailure());
  }
};
const getFriends = function* getFriends() {
  const result = yield call(vkCall, 'friends.get', {
    fields: 'name,photo_200_orig',
    v: '5.73',
  });
  if (result.response.items) {
    yield put(getFriendsSuccess(result.response.items));
  } else {
    yield put(getFriendsFailure());
  }
};
const authorisationOAuth = function* authorisationOAuth() {
  yield put(getAutorisationStarted());
  const resultLogin = yield call(vkLogin, 73728);
  if (resultLogin.session) {
    yield put(getAutorisationSuccess(resultLogin.session.sid));
    localStorage.setItem('loc', true);
  } else {
    yield put(getAutorisationFailure());
  }
};
const getInfoUser = function* getInfoUser() {
  yield put(getAccountInfoStarted());
  yield put(getFriendsStarted());
};
const initFunc = function* initFunc() {
  yield call(window.VK.init, { apiId: apiIdVk });
  yield put(getGet());
};

export default function* watchMessages() {
  yield takeEvery('OAUTH_AUTHORISATION', authorisationOAuth);
  yield takeEvery('LOGOUT_USER', logoutVkFunc);
  yield takeEvery('GET_ACCOUNT_INFO_STARTED', getAccountInfo);
  yield takeEvery('GET_FRIENDS_STARTED', getFriends);
  yield takeEvery('GET_GET', getInfoUser);
  yield takeEvery('GET_AUTORISATION', initFunc);
}
