import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, ContactList} from './styles';
import {Contact} from '../../store/ducks/chat/types';
import ContactItem from '../../components/ContactItem';
import {ApplicationState} from '../../store';
import {
  createChat,
  getChatsRequest,
  getContactsRequest,
} from '../../store/ducks/chat/actions';
import {useNavigation} from '@react-navigation/native';

const Contacts: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const uid = useSelector((state: ApplicationState) => state.auth.uid);

  useEffect(() => {
    dispatch(getContactsRequest(uid));
  }, []);

  const contacts = useSelector(
    (state: ApplicationState) => state.chat.contacts,
  );

  const onContactPress = useCallback((contact: Contact) => {
    dispatch(createChat(uid, contact.key));

    setTimeout(() => {
      navigation.navigate('Chat');
    }, 500);
  }, []);

  return (
    <Container>
      <ContactList
        data={contacts}
        renderItem={({item}: any) => (
          <ContactItem name={item.name} onPress={() => onContactPress(item)} />
        )}
      />
    </Container>
  );
};

export default Contacts;
