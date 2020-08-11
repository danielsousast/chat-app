import {all, takeLatest} from 'redux-saga/effects';
import {AuthTypes} from './auth/types';
import {signIn, checkLogin} from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.CHECK_LOGIN_REQUEST, checkLogin),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signIn),
  ]);
}
