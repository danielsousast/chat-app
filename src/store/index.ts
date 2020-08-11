import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import {AuthState} from './ducks/auth/types';
import createStore from './createStore';

export interface ApplicationState {
  auth: AuthState;
}

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
