import React from 'react';
import {Container, Name, Avatar} from './styles';

interface ContactItemProps {
  name: string;
  onPress(): void;
}

const ContactItem: React.FC<ContactItemProps> = ({name, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Avatar source={require('../../assets/default.jpg')} />
      <Name>{name}</Name>
    </Container>
  );
};

export default ContactItem;
