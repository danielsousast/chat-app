import './config/ReactotronConfig';
import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import Routes from './routes';
import store from './store';
import {Text, View} from 'react-native';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
