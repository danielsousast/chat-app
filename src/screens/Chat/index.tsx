import React, {useEffect, useMemo, useRef, useState} from 'react';
import {BackHandler, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderBackButton} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import FetchBlog from 'react-native-fetch-blob';
import {useDispatch, useSelector} from 'react-redux';
import {ApplicationState} from '../../store';
import {
  getMessagesRequest,
  sendMessageRequest,
  setActiveChat,
  getMessagesOff,
  uploadImage,
} from '../../store/ducks/chat/actions';
import Bubble from '../../components/Bubble';
import {
  MessageList,
  Container,
  Content,
  Footer,
  SendButton,
  SendIput,
  AttachmentButton,
  ImagePreviewContent,
  ImagePreview,
} from './styles';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {format, isToday} from 'date-fns';
import {ptBR} from 'date-fns/locale';

const Chat: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const activeChatTitle = useSelector(
    (state: ApplicationState) => state.chat.activeChatTitle,
  );
  const activeChat = useSelector(
    (state: ApplicationState) => state.chat.activeChat,
  );

  const messages = useSelector(
    (state: ApplicationState) => state.chat.messages,
  );

  const invertedMessages = useMemo(() => {
    let newMessages = messages.map((message) => {
      const parsedDate = new Date(message.date);
      return {
        ...message,
        formattedDate: isToday(parsedDate)
          ? 'Hoje'
          : format(parsedDate, "dd'/'MM'/'yyy", {locale: ptBR}),
      };
    });

    return newMessages.reverse();
  }, [messages]);

  const uid = useSelector((state: ApplicationState) => state.auth.uid);

  const [messageText, setMessagetext] = useState<string>('');
  const [imagelUrl, setImagelUrl] = useState<string>('');

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    navigation.setOptions({
      title: activeChatTitle,
      headerLeft: () => <HeaderBackButton onPress={goBack} />,
    });
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', goBack);

    return () => BackHandler.removeEventListener('hardwareBackPress', goBack);
  }, []);

  useEffect(() => {
    dispatch(getMessagesRequest(activeChat));

    return () => {
      dispatch(getMessagesOff(activeChat));
    };
  }, []);

  const goBack = () => {
    dispatch(setActiveChat(''));
    navigation.goBack();

    return true;
  };

  const onSendMessage = () => {
    if (messageText.trim() === '') return;

    dispatch(
      sendMessageRequest({
        type: 'text',
        content: messageText,
        owner: uid,
        activeChat,
      }),
    );

    setMessagetext('');
  };

  const onChooseImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.uri) {
        setImagelUrl(response.uri);

        let uri = response.uri.replace('file://', '');

        dispatch(
          uploadImage(uri, (image: string) => {
            dispatch(
              sendMessageRequest({
                type: 'image',
                content: image,
                owner: uid,
                activeChat,
              }),
            );
          }),
        );

        setTimeout(() => {
          setImagelUrl('');
        }, 1000);
      }
    });
  };

  const getFooterPadding = () => {
    const safeArea = useSafeAreaFrame();

    if (safeArea.height !== 0) {
      return 28;
    }

    return 16;
  };

  const renderImagePreview = () => {
    if (imagelUrl) {
      return (
        <ImagePreviewContent>
          <ImagePreview source={{uri: imagelUrl}} />
        </ImagePreviewContent>
      );
    }
  };

  return (
    <Container behavior="padding" keyboardVerticalOffset={80}>
      <Content>
        <MessageList
          inverted
          style={{flex: 1}}
          data={invertedMessages}
          renderItem={({item}) => (
            <Bubble children={item.message} data={item} />
          )}
          keyExtractor={(item) => item.key}
        />
        {renderImagePreview()}
      </Content>
      <Footer style={{paddingBottom: getFooterPadding()}}>
        <AttachmentButton underlayColor="#eee" onPress={onChooseImage}>
          <Icon name="image" size={28} color="#f52e5d" />
        </AttachmentButton>
        <SendIput
          ref={inputRef}
          value={messageText}
          placeholder="Digite sua mensagem aqui"
          onChangeText={setMessagetext}
        />
        <SendButton underlayColor="#eee" onPress={onSendMessage}>
          <Icon name="send" size={28} color="#f52e5d" />
        </SendButton>
      </Footer>
    </Container>
  );
};

export default Chat;
