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
import {signinRequestAction, signupRequestAction} from './types';

export function* checkLogin() {
  try {
    const user = auth().currentUser;

    if (user) {
      yield put(checkLoginSuccess());
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

    yield call(
      [auth(), auth().signInWithEmailAndPassword],
      payload.email,
      payload.password,
    );
    yield put(signInSuccess());

    Alert.alert('Sucesso');
  } catch (error) {
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
    yield put(signUpFailure());
    Alert.alert('Ocorreu um erro', 'Verifique seus dados');
  }
}
