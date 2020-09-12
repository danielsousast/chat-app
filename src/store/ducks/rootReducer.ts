import {combineReducers} from 'redux';
import AuthReducer from './auth';
import ChatReducer from './chat';

const rootReducer = combineReducers({
  auth: AuthReducer,
  chat: ChatReducer,
});

export default rootReducer;
