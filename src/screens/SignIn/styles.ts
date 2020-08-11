import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

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
  margin-bottom: 8px;
  padding-left: 20px;
`;

export const Button = styled(RectButton)`
  width: 80%;
  height: 46px;
  border-radius: 8px;
  background: #f52e5d;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
