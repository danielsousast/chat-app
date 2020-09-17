import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';
import {Container} from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color={colors.primary} size="large" />
    </Container>
  );
};

export default Loading;
