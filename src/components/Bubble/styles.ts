import styled from 'styled-components/native';

interface ContainerProps {
  isMe: boolean
}

interface MessageProps {
  isMe: boolean
}

export const Container = styled.View<ContainerProps>`
  padding: 8px;
  background:${props => props.isMe ? '#ffa5ba' : '#fff'};
  margin: 8px 16px;
  border-radius: 10px;
  max-width: 80%;
  align-self:${props => props.isMe ? 'flex-end' : 'flex-start'};
`;

export const Message = styled.Text<MessageProps>`
  font-size:14px;
  text-align:${props => props.isMe ? 'right' : "left"};
`;

export const MessageDate = styled.Text<MessageProps>`
  font-size:11px;
  margin-top:8px;
  color:#333;
  text-align:${props => props.isMe ? 'right' : "left"};
`;

export const Image = styled.Image<MessageProps>`
  font-size:14px;
  text-align:${props => props.isMe ? 'right' : "left"};
  height:200px;
  width:200px;
`;