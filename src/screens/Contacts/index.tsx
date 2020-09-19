import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, ContactList} from './styles';
import {Chat, Contact} from '../../store/ducks/chat/types';
import ContactItem from '../../components/ContactItem';
import {ApplicationState} from '../../store';
import {
  createChat,
  getChatsRequest,
  getContactsRequest,
  setActiveChat,
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
  const chats = useSelector((state: ApplicationState) => state.chat.chats);

  const onContactPress = useCallback(
    (contact: Contact) => {
      let chasFiltered = chats.filter((c) => c.other === contact.key);

      if (chasFiltered.length === 0) {
        dispatch(createChat(uid, contact.key));

        setTimeout(() => {
          return navigation.navigate('Chat');
        }, 500);
      }

      if (chasFiltered[0]?.key) dispatch(setActiveChat(chasFiltered[0]?.key));
    },
    [chats],
  );

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
