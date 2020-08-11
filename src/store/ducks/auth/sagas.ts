import {SagaIterator} from 'redux-saga';
import {put, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {
  checkLoginFailure,
  checkLoginSuccess,
  signInFailure,
  signInSuccess,
} from './actions';
import auth from '@react-native-firebase/auth';
import {DataType, AuthTypes, AuthCredentials} from './types';
import {TakeableChannel} from 'redux-saga';
import {Action} from 'redux';

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

export function* signIn(data) {
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
    console.log(error);
    yield put(signInFailure());
  }
}
