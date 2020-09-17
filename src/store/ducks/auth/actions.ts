import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {
  AuthTypes,
  AuthCredentials,
  AuthSignUp,
  userFirebaseReponse,
} from './types';

import { Alert } from 'react-native';
import { getSignInError, getSignUpError } from '../../../utils/AuthErrors';
import { Dispatch } from 'redux';

export const checkLoginRequest = () => {
  return (dispatch: any) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: AuthTypes.CHECK_LOGIN_SUCCESS,
          payload: {
            uid: user.uid,
          },
        });
      } else {
        dispatch({
          type: AuthTypes.SIGNOUT_SUCCESS,
          payload: {
            status: 2,
          },
        });
      }
    });
  };
};

export const signInRequest = (data: AuthCredentials) => {
  return (dispatch: any) => {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        const uid = auth().currentUser?.uid;

        dispatch({
          type: AuthTypes.SIGNIN_SUCCESS,
          payload: {
            uid: uid,
          },
        });

        Alert.alert('Sucesso');
      })
      .catch((error) => {
        Alert.alert('Ocorreu um erro', getSignInError(error.code));
      });
  };
};

export const signUpRequest = (data: AuthSignUp) => {
  return (dispatch: Dispatch) => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        const uid = auth().currentUser?.uid;

        database().ref('users').child(String(uid)).set({
          name: data.name,
        });

        dispatch({
          type: AuthTypes.SIGNOUT_SUCCESS,
          payload: {
            uid: uid,
          },
        });
      })
      .catch((error: any) => {
        Alert.alert('Ocorreu um erro', getSignUpError(error.code));
      });
  };
};

export const signOutRequest = () => {
  auth().signOut();

  return {
    type: AuthTypes.SIGNOUT_SUCCESS,
  };
};


export const setLoading = () => {
  return {
    type: AuthTypes.AUTH_LOADING,
  };
}