export enum AuthTypes {
  CHECK_LOGIN_REQUEST = '@auth/CHECK_LOGIN_REQUEST',
  CHECK_LOGIN_SUCCESS = '@auth/CHECK_LOGIN_SUCCESS',
  CHECK_LOGIN_FAILURE = '@auth/CHECK_LOGIN_FAILURE',

  SIGNIN_REQUEST = '@auth/SIGNIN_REQUEST',
  SIGNIN_SUCCESS = '@auth/SIGNIN_SUCCESS',
  SIGNIN_FAILURE = '@auth/SIGNIN_FAILURE',

  SIGNUP_REQUEST = '@auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS = '@auth/SIGNUP_SUCCESS',
  SIGNUP_FAILURE = '@auth/SIGNUP_FAILURE',
}

export interface signinRequestAction {
  type: AuthTypes.SIGNIN_REQUEST;
  payload: AuthCredentials;
}

export interface signupRequestAction {
  type: AuthTypes.SIGNUP_REQUEST;
  payload: AuthSignUp;
}

export interface userFirebaseReponse {
  email:string | null;
  uid:string | null;
}

export interface AuthState {
  readonly email: string;
  readonly uid: string;
  readonly signed: boolean;
}

export interface AuthCredentials {
  readonly email: string;
  readonly password: string;
}

export interface AuthSignUp {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}
