import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 46px;
  border-radius: 8px;
  background: #eee;
  margin-bottom: 10px;
  padding-left: 20px;
`;

export const Button = styled(RectButton)`
  width: 80%;
  height: 46px;
  border-radius: 8px;
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const Link = styled.TouchableOpacity`
  width: 80%;
  height: 46px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const LinkText = styled.Text`
  color: ${colors.primary};
  font-size: 18px;
`;
