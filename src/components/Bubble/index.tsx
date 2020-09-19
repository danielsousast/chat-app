import React from 'react';
import {useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import {Message as MessageType} from '../../store/ducks/chat/types';
import {Container, Image, Message, MessageDate} from './styles';

interface BubbleProps {
  data: MessageType;
}

const Bubble: React.FC<BubbleProps> = ({data}) => {
  const uid = useSelector((state: ApplicationState) => state.auth.uid);

  const renderMessage = () => {
    if (data.type === 'text') {
      return <Message isMe={uid === data.uid}>{data.message}</Message>;
    }

    if (data.type === 'image') {
      return <Image source={{uri: data.imageUrl}} isMe={uid === data.uid} />;
    }
  };

  return (
    <Container isMe={uid === data.uid}>
      {renderMessage()}
      <MessageDate isMe={uid === data.uid}>{data.formattedDate}</MessageDate>
    </Container>
  );
};

export default Bubble;
