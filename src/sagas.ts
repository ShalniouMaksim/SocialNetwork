/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { call, put, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  setFirstName,
  setLastName,
  setStatus,
  setUrlPhoto,
  setAutorisationSuccess,
  setAutorisationStarted,
  setAutorisationFailure,
  getAccountInfoStarted,
  getAccountInfoFailure,
  getAccountInfoSuccess,
  getFriendsStarted,
  getFriendsSuccess,
  getFriendsFailure,
  setLogoutStarted,
  setLogoutFailure,
  setLogoutSuccess,
  getInfoFromAccount,
} from './actions';
import { vkCall, vkLogin, vkLogout } from './helper';
import apiIdVk from './constants';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window { VK: any; }
}
window.VK = window.VK || {};

const logoutVkFunc = function* logoutVkFunc(): SagaIterator {
  yield put(setLogoutStarted());
  const resultLogout = yield call(vkLogout);
  if (resultLogout.session) yield put(setLogoutFailure());
  else {
    yield put(setLogoutSuccess());
    localStorage.setItem('isAuth', 'false');
  }
};

const getAccountInfo = function* getAccountInfo(): SagaIterator {
  const resultUser = yield call(vkCall, 'users.get', {
    fields: 'online,photo_200',
    v: '5.73',
  });
  if (!resultUser.error) {
    if (resultUser.response[0].id) {
      yield put(getAccountInfoSuccess());
      yield put(setFirstName(resultUser.response[0].first_name));
      yield put(setLastName(resultUser.response[0].last_name));
      yield put(setUrlPhoto(resultUser.response[0].photo_200));
      switch (resultUser.response[0].online) {
        case 0:
          yield put(setStatus(false));
          break;
        default:
          yield put(setStatus(true));
      }
    }
  } else {
    yield put(getAccountInfoFailure());
  }
};
const getFriends = function* getFriends(): SagaIterator {
  const result = yield call(vkCall, 'friends.get', {
    fields: 'name,photo_200_orig',
    v: '5.73',
  });
  if (!result.error) {
    if (result.response.items) {
      yield put(getFriendsSuccess(result.response.items));
    }
  } else {
    yield put(getFriendsFailure());
  }
};
const authorisationOAuth = function* authorisationOAuth(): SagaIterator {
  yield put(setAutorisationStarted());
  yield call(window.VK.init, { apiId: apiIdVk });
  const resultLogin = yield call(vkLogin, 73728);
  if (resultLogin.session) {
    yield put(setAutorisationSuccess(resultLogin.session.sid));
    localStorage.setItem('isAuth', 'true');
    yield put(getAccountInfoStarted());
    yield put(getFriendsStarted());
  } else {
    yield put(setAutorisationFailure());
  }
};
const getInfoUser = function* getInfoUser(): SagaIterator {
  yield put(getAccountInfoStarted());
  yield put(getFriendsStarted());
};
const initFunc = function* initFunc(): SagaIterator {
  yield call(window.VK.init, { apiId: apiIdVk });
  const resultUser = yield call(vkCall, 'users.get', {
    fields: 'online,photo_200',
    v: '5.73',
  });
  if (!resultUser.error) {
    if (resultUser.response[0].id) {
      yield put(setAutorisationSuccess(resultUser.response[0].sid));
      yield put(getInfoFromAccount());
    } else yield put(setAutorisationFailure());
  }
};

export default function* watchMessages(): SagaIterator {
  yield takeEvery('LOGIN_OAUTH_VK', authorisationOAuth);
  yield takeEvery('LOGOUT_USER', logoutVkFunc);
  yield takeEvery('GET_ACCOUNT_INFO_STARTED', getAccountInfo);
  yield takeEvery('GET_FRIENDS_STARTED', getFriends);
  yield takeEvery('GET_INFO_FROM_ACCOUNT', getInfoUser);
  yield takeEvery('CHECK_AUTORISATION', initFunc);
}