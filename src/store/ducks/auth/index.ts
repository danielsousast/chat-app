import {AuthState, AuthTypes} from './types';
import {Action} from 'redux';

const initialState: AuthState = {
  email: '',
  uid: '',
  signed: false,
};

export default function AuthReducer(state = initialState, action:any) {
  switch (action.type) {
    case AuthTypes.SIGNIN_SUCCESS: {
      return {...state, signed: true, 
        email:action.payload.email,
        uid:action.payload.uid
      };
    }
    case AuthTypes.CHECK_LOGIN_SUCCESS: {
      return {...state, signed: true,
        email:action.payload.email,
        uid:action.payload.uid
      };
    }
    default: {
      return state;
    }
  }
}
