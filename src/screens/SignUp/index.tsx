import React, {useState} from 'react';

import {Container, Input, Button, ButtonText, Link, LinkText} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading, signUpRequest} from '../../store/ducks/auth/actions';
import {useNavigation} from '@react-navigation/native';
import Loading from '../../components/Loading';
import {ApplicationState} from '../../store';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {loading} = useSelector((state: ApplicationState) => state.auth);

  const handleSignUp = async () => {
    dispatch(setLoading());
    dispatch(signUpRequest({name, email, password}));

    setName('');
    setEmail('');
    setPassword('');
  };

  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <Input
        placeholder="Nome"
        autoCapitalize="none"
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <Button onPress={handleSignUp}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
      <Link onPress={navigateToSignIn}>
        <LinkText>Já possui conta?</LinkText>
      </Link>
      {loading && <Loading />}
    </Container>
  );
};

export default SignUp;
