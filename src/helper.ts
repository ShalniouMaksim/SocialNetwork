/* eslint-disable no-undef */
export function vkCall(method: string, obj: object): Promise<object> {
  return new Promise((resolve, reject) => {
    window.VK.Api.call(
      method, obj,
      (response: object) => resolve(response),
      (response: object) => reject(response),
    );
  });
}

export function vkLogin(arg: number):Promise<object> {
  return new Promise((resolve, reject) => {
    window.VK.Auth.login((response: object) => {
      resolve(response);
    },
    (response: object) => reject(response), arg);
  });
}

export function vkLogout():Promise<object> {
  return new Promise((resolve, reject) => {
    window.VK.Auth.logout((response: object) => resolve(response),
      (response: object) => reject(response));
  });
}

export function vkGetLoginStatus(): Promise<object> {
  return new Promise((resolve, reject) => {
    window.VK.Auth.getSession((response: object) => resolve(response),
      (response: object) => reject(response));
  });
}
