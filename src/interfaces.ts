/* eslint-disable camelcase */
import { History } from 'history';

export interface State
{
    firstName: string,
    lastName: string,
    status: boolean,
    photo: string,
    sid: string,
    loginStatus: boolean,
    loadingInfo: boolean,
    getFriendsLoading: boolean,
    friends: Array<FriendsInterface>,
}

export interface FriendsInterface {
    id: string,
    first_name: string,
    photo_200_orig: string,
    last_name: string,
    online: string,
  }
export interface ActionType {
    type: string,
  }
export interface StoreInterface {
    type: string,
    loginStatus: boolean,
    history: History,
    loadingInfo: boolean,
    firstName: string,
    lastName: string,
    status: boolean,
    photo: string,
    sid: string,
    friends: Array<FriendsInterface>,
    getFriendsLoading: boolean,
    loginOAuthVK: () => void,
    getInfoFromAccount: () => void,
    checkAutorisation: () => void,
    getInformationFromAccount: () => void,
    logoutUser: () => void,
}
export interface FetchUserCall
{
    response:
    {
        arg0:
            {
                id: number,
                first_name: string,
                last_name: string,
                photo_200: string,
                online: number,
            }
    }
}

export interface MapStateToPropsLogout
{
    loginStatus: boolean,
    loadingInfo: boolean,
    getFriendsLoading: boolean,
}

export interface FetchFriendsCall
{
    response:
    {
            count: number,
            items:
        {
            arg0:
                {
                id: number,
                first_name: string,
                last_name: string,
                photo_200_origin: string,
                online: number,
                track_code: string,
                }
        },
        length: number,
    }
}
export interface FetchLogin
{
    session:
        {
        mid: string,
        sid: string,
        sig: string,
        secret: string,
        expire: number,
        }
    user:
        {
        id: string,
        domain: string,
        href: string,
        first_name: string,
        last_name: string,
        nickname: string,
        },
    status: string
}

export interface FetchLogout
{
    session: null,
    status: string,
    settings: undefined,
}

export interface FriendsSuccess
{
    type: string,
    friends: FriendsInterface
}

export interface UrlPhoto
{
    type: string,
    photo: string
}

export interface FirstName
{
    type: string,
    firstName: string
}

export interface LastName
{
    type: string,
    lastName: string
}

export interface Status
{
    type: string,
    status: string
}

export interface MapStateToPropsLogin
{
    loginStatus: boolean,
    loadingInfo: boolean,
    getFriendsLoading: boolean,
}

export interface MapStateToPropsUserInfo
{
    firstName: string,
    lastName: string,
    status: boolean,
    photo: string,
    sid: string,
    loginStatus: boolean,
    friends: Array<FriendsInterface>,
}

export interface CompDispatchPropsUserInfo
{
  loginOAuthVK: () => void,
  setAutorisationSuccess: (value: string) => void,
  logoutUser: () => void,
}

export interface CompDispatchPropsUserLogout
{
  logoutUser: () => void,
  setAutorisationSuccess: (value: string) => void,
  setAutorisationFailure: () => void,
  loginOAuthVK: () => void,
  getInfoFromAccount: () => void,
  checkAutorisation: () => void,
}

export interface CompDispatchPropsUserLogin
{
  logoutUser: () => void,
  setAutorisationSuccess: (value: string) => void,
  setAutorisationFailure: () => void,
  loginOAuthVK: () => void,
  getInfoFromAccount: () => void,
  checkAutorisation: () => void,
}
