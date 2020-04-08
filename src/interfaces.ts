import { History } from 'history';

interface UserInfo
{
    firstName: string,
    lastName: string,
    status: boolean,
    photo: string,
}

export interface MapStateToProps
{
    loginStatus: boolean,
    loadingInfo: boolean,
    getFriendsLoading: boolean,
}

export interface MapStateToPropsUserInfo extends UserInfo
{
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

export interface CompDispatchPropsUser extends CompDispatchPropsUserInfo
{
  setAutorisationFailure: () => void,
  getInfoFromAccount: () => void,
  checkAutorisation: () => void,
}

export interface State extends MapStateToPropsUserInfo
{
    loadingInfo: boolean,
    getFriendsLoading: boolean,
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
export interface StoreInterface extends State{
    type: string,
    history: History,
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

export interface FriendsSuccess extends ActionType
{
    friends: FriendsInterface
}

export interface UrlPhoto extends ActionType
{
    photo: string
}

export interface FirstName extends ActionType
{
    firstName: string
}

export interface LastName extends ActionType
{
    lastName: string
}

export interface Status extends ActionType
{
    status: string
}
