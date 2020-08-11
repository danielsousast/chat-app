export enum AuthTypes {
  CHECK_LOGIN_REQUEST = '@auth/CHECK_LOGIN_REQUEST',
  CHECK_LOGIN_SUCCESS = '@auth/CHECK_LOGIN_SUCCESS',
  CHECK_LOGIN_FAILURE = '@auth/CHECK_LOGIN_FAILURE',
  SIGNIN_REQUEST = '@auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS = '@auth/SIGNIN_SUCCESS',
  SIGNIN_FAILURE = '@auth/SIGNIN_FAILURE',
}

export interface signinRequestAction {
  type: AuthTypes.SIGNIN_REQUEST;
  payload: AuthCredentials;
}

export interface AuthState {
  readonly email: string;
  readonly password: string;
  readonly signed: boolean;
}

export interface AuthCredentials {
  readonly email: string;
  readonly password: string;
}

export interface DataType {
  payload: AuthCredentials;
}
