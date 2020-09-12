import React, {useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import ChatItem from '../../components/ChatItem';
import {ApplicationState} from '../../store';
import {getChatsRequest, setActiveChat} from '../../store/ducks/chat/actions';
import {Container, ConversationList} from './styles';

// import { Container } from './styles';

const Chats: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const activeChat = useSelector(
    (state: ApplicationState) => state.chat.activeChat,
  );

  const uid = useSelector((state: ApplicationState) => state.auth.uid);
  const chats = useSelector((state: ApplicationState) => state.chat.chats);

  useEffect(() => {
    dispatch(getChatsRequest(uid));
  }, [uid]);

  useEffect(() => {
    if (activeChat !== '') {
      navigation.navigate('Chat');
    }
  }, [activeChat]);

  const onChatPress = useCallback((chatId) => {
    dispatch(setActiveChat(chatId));
  }, []);

  return (
    <Container>
      <ConversationList
        data={chats}
        renderItem={({item}) => (
          <ChatItem data={item} onPress={() => onChatPress(item.key)} />
        )}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Chats;
