import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1%;
  justify-content: center;
  align-items: center;
`;

export const SignOutButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const SignOutButtonText = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
`;
