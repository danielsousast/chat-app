import {AuthState, AuthTypes} from './types';
import {Action} from 'redux';

const initialState: AuthState = {
  email: '',
  password: '',
  signed: false,
};

export default function AuthReducer(state = initialState, action: Action) {
  switch (action.type) {
    case AuthTypes.SIGNIN_SUCCESS: {
      return {...state, signed: true};
    }
    case AuthTypes.CHECK_LOGIN_SUCCESS: {
      return {...state, signed: true};
    }
    default: {
      return state;
    }
  }
}
