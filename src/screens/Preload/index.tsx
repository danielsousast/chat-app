import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useStore, useDispatch} from 'react-redux';
import {ApplicationState} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {checkLoginRequest} from '../../store/ducks/auth/actions';

// import { Container } from './styles';

const Preload: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signed = useSelector((state: ApplicationState) => state.auth.signed);
  //const signed = store.getState().auth.signed;

  useEffect(() => {
    dispatch(checkLoginRequest());
  }, []);

  useEffect(() => {
    if (signed) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('SignIn');
    }
  }, [signed]);

  return (
    <View style={{backgroundColor: 'black'}}>
      <Text>Preload</Text>
    </View>
  );
};

export default Preload;
