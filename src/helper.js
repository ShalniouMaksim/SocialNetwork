export function vkCall(...args) {
  console.log('jopa');
  return new Promise((resolve, reject) => {
    window.VK.Api.call(
      ...args,
      (response) => resolve(response),
      (response) => reject(response),
    );
  });
}

export function vkLogin(...args) {
  return new Promise((resolve, reject) => {
    window.VK.Auth.login((response) => resolve(response),
      (response) => reject(response));
  }, ...args);
}

export function vkLogout() {
  return new Promise((resolve, reject) => {
    window.VK.Auth.logout((response) => resolve(response),
      (response) => reject(response));
  });
}
