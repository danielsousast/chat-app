import {put, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {
  checkLoginFailure,
  checkLoginSuccess,
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
} from './actions';
import auth from '@react-native-firebase/auth';
import {signinRequestAction, signupRequestAction, userFirebaseReponse} from './types';
import { getSignInError, getSignUpError } from '../../../utils/AuthErrors';

export function* checkLogin() {
  try {
    const user = auth().currentUser;

    if (user) {
      yield put(checkLoginSuccess({
        uid:user.uid,
        email:user.email
      }));
    } else {
      yield put(checkLoginFailure());
    }
  } catch (error) {
    yield put(checkLoginFailure());
  }
}

export function* signIn(data: signinRequestAction) {
  try {
    const payload = data.payload;

    const {user} = yield call(
      [auth(), auth().signInWithEmailAndPassword],
      payload.email,
      payload.password,
    );

    yield put(signInSuccess({
      email:user.email,
      uid:user.uid
    }));

    Alert.alert('Sucesso');
  } catch (error) {
    Alert.alert('Ocorreu um erro', getSignInError(error.code));
    yield put(signInFailure());
  }
}

export function* signUp(data: signupRequestAction) {
  try {
    const payload = data.payload;

    yield call(
      [auth(), auth().createUserWithEmailAndPassword],
      payload.email,
      payload.password,
    );

    yield put(signUpSuccess());
    Alert.alert('Sucesso', 'Agora você já pode fazer seu login');
  } catch (error) {
    Alert.alert('Ocorreu um erro', getSignUpError(error.code));
    yield put(signUpFailure());
  }
}
