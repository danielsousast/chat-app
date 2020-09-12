import React, {useCallback} from 'react';

import {View, Alert} from 'react-native';
import {Container, SignOutButton, SignOutButtonText} from './styles';
import {useDispatch} from 'react-redux';
import {signOutRequest} from '../../store/ducks/auth/actions';
import {CommonActions, useNavigation} from '@react-navigation/native';

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignOut = useCallback(() => {
    dispatch(signOutRequest());

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'SignIn',
          },
        ],
      }),
    );
  }, []);

  return (
    <Container>
      <SignOutButton onPress={handleSignOut}>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default Settings;
