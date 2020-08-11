import {action} from 'typesafe-actions';
import {AuthTypes, AuthCredentials} from './types';

export const checkLoginRequest = () => action(AuthTypes.CHECK_LOGIN_REQUEST);
export const checkLoginSuccess = () => action(AuthTypes.CHECK_LOGIN_SUCCESS);
export const checkLoginFailure = () => action(AuthTypes.CHECK_LOGIN_FAILURE);

export const signInRequest = (data: AuthCredentials) =>
  action(AuthTypes.SIGNIN_REQUEST, data);
export const signInSuccess = () => action(AuthTypes.SIGNIN_SUCCESS);
export const signInFailure = () => action(AuthTypes.SIGNIN_FAILURE);
