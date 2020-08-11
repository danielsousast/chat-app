import {combineReducers} from 'redux';
import AuthReducer from '../ducks/auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export default rootReducer;
