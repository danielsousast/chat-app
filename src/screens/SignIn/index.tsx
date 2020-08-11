import React, {useState, useCallback} from 'react';

import {Container, Input, Button, ButtonText} from './styles';
import {useDispatch} from 'react-redux';
import {signInRequest} from '../../store/ducks/auth/actions';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    // TO DO login action
    dispatch(signInRequest({email, password}));

    //console.log(email, password);
  };

  return (
    <Container>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
};

export default SignIn;
