/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
import {
  FetchUserCall, FetchFriendsCall, FetchLogin, FetchLogout,
} from './interfaces';

export function vkCall(method: string, obj: {fields: string, v: string}):
Promise<FetchUserCall | FetchFriendsCall> {
  return new Promise((resolve, reject) => {
    window.VK.Api.call(
      method, obj,
      (response: FetchUserCall | FetchFriendsCall) => resolve(response),
      (response: FetchUserCall | FetchFriendsCall) => reject(response),
    );
  });
}

export function vkLogin(arg: number):Promise<FetchLogin> {
  return new Promise((resolve, reject) => {
    window.VK.Auth.login((response: FetchLogin) => {
      resolve(response);
    },
    (response: FetchLogin) => reject(response), arg);
  });
}

export function vkLogout():Promise<FetchLogout> {
  return new Promise((resolve, reject) => {
    window.VK.Auth.logout((response: FetchLogout) => resolve(response),
      (response: FetchLogout) => reject(response));
  });
}
