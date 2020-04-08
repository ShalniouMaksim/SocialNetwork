import { actionCreatorFactory } from 'typescript-fsa';
import { FriendsInterface } from './interfaces';

const actionCreator = actionCreatorFactory();


export const setFirstName = actionCreator<string>('SET_FIRST_NAME');
export const setLastName = actionCreator<string>('SET_LAST_NAME');
export const setStatus = actionCreator<boolean>('SET_STATUS');
export const setUrlPhoto = actionCreator<string>('SET_URL_PHOTO');
export const setAutorisationSuccess = actionCreator<string>('SET_AUTORISATION_SUCCESS');
export const setAutorisationStarted = actionCreator('SET_AUTORISATION_STARTED');
export const setAutorisationFailure = actionCreator('SET_AUTORISATION_FAILURE');
export const getFriendsStarted = actionCreator('GET_FRIENDS_STARTED');
export const getFriendsSuccess = actionCreator<Array<FriendsInterface>>('GET_FRIENDS_SUCCESS');
export const getFriendsFailure = actionCreator('GET_FRIENDS_FAILURE');
export const getAccountInfoSuccess = actionCreator('GET_ACCOUNT_INFO_SUCCESS');
export const getAccountInfoStarted = actionCreator('GET_ACCOUNT_INFO_STARTED');
export const getAccountInfoFailure = actionCreator('GET_ACCOUNT_INFO_FAILURE');
export const setLogoutStarted = actionCreator('SET_LOGOUT_STARTED');
export const setLogoutFailure = actionCreator('SET_LOGOUT_FAILURE');
export const setLogoutSuccess = actionCreator('SET_LOGOUT_SUCCESS');
export const loginOAuthVK = actionCreator('LOGIN_OAUTH_VK');
export const getInfoFromAccount = actionCreator('GET_INFO_FROM_ACCOUNT');
export const logoutUser = actionCreator('LOGOUT_USER');
export const checkAutorisation = actionCreator('CHECK_AUTORISATION');
