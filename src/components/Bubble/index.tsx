import React from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import {Message as MessageType} from '../../store/ducks/chat/types';
import {Container, Message, MessageDate} from './styles';

interface BubbleProps {
  data: MessageType;
}

const Bubble: React.FC<BubbleProps> = ({data}) => {
  const uid = useSelector((state: ApplicationState) => state.auth.uid);

  return (
    <Container isMe={uid === data.uid}>
      <Message isMe={uid === data.uid}>{data.message}</Message>
      <MessageDate isMe={uid === data.uid}>{data.formattedDate}</MessageDate>
    </Container>
  );
};

export default Bubble;
