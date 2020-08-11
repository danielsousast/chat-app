import {all, takeLatest} from 'redux-saga/effects';
import {AuthTypes} from './auth/types';
import {signIn, signUp, checkLogin} from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.CHECK_LOGIN_REQUEST, checkLogin),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signUp),
  ]);
}
