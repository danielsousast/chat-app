import {AuthState, AuthTypes} from './types';

const initialState: AuthState = {
  email: '',
  uid: '',
  signed: false,
};

export default function AuthReducer(state = initialState, action: any) {
  switch (action.type) {
    case AuthTypes.SIGNIN_SUCCESS: {
      return {
        ...state,
        signed: true,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    }
    case AuthTypes.CHECK_LOGIN_SUCCESS: {
      return {
        ...state,
        signed: true,
        email: action.payload.email,
        uid: action.payload.uid,
      };
    }
    case AuthTypes.SIGNOUT_SUCCESS: {
      return {...state, signed: false, email: '', uid: ''};
    }
    default: {
      return state;
    }
  }
}
