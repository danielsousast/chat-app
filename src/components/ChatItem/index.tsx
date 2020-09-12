import React from 'react';
import {Chat} from '../../store/ducks/chat/types';
import {Container, Name, Avatar} from './styles';

interface ChatItem {
  data: Chat;
  onPress(): void;
}

const ChatItem: React.FC<ChatItem> = ({data, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Avatar source={require('../../assets/default.jpg')} />
      <Name>{data.title}</Name>
    </Container>
  );
};

export default ChatItem;
