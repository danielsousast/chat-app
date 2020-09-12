import rootReducer from './ducks/rootReducer';
import thunk from 'redux-thunk';
import createStore from './createStore';

import {AuthState} from './ducks/auth/types';
import {ChatState} from './ducks/chat/types';

export interface ApplicationState {
  auth: AuthState;
  chat: ChatState;
}

const middlewares = [thunk];

const store = createStore(rootReducer, middlewares);

export default store;
