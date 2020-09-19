import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { Alert } from 'react-native';

import { Dispatch } from 'redux';
import { ChatTypes, Contact, Chat, SendMessageData } from './types';

export const getContactsRequest = (userId: string) => {
  return (dispatch: Dispatch) => {
    let contactsList: Contact[] = [];
    database()
      .ref('users')
      .orderByChild('name')
      .once('value')
      .then((response) => {
        response.forEach((item: any) => {
          if (item.key !== userId) {
            contactsList.push({
              key: item.key,
              name: item.val().name,
            });
          }
        });

        dispatch({
          type: ChatTypes.GET_CONTACTS_SUCCESS,
          payload: {
            contacts: contactsList,
          },
        });
      });
  };
};

export const createChat = (userId: string, contactId: string) => {
  return (dispatch: Dispatch) => {
    const newChat = database().ref('chats').push();

    // Criando chat
    newChat.child('members').child(userId).set({
      id: userId,
      title: 'Title'
    });

    newChat.child('members').child(contactId).set({
      id: contactId,
      title: 'Title'
    });

    database().ref('users').child(contactId).once('value').then(response => {
      database()
        .ref('users')
        .child(userId)
        .child('chats')
        .child(String(newChat.key))
        .set({
          id: newChat.key,
          title: response.val().name,
          other: contactId
        });

      dispatch({
        type: ChatTypes.CREATE_CHAT_SUCCESS,
        payload: {
          chatId: newChat.key,
          chatTitle: response.val().name,
        },
      });
    })

    database().ref('users').child(userId).once('value').then(response => {
      database()
        .ref('users')
        .child(contactId)
        .child('chats')
        .child(String(newChat.key))
        .set({
          id: newChat.key,
          title: response.val().name,
          other: userId
        });
    });
  };
};

export const setActiveChat = (chatId: string) => {
  return {
    type: ChatTypes.SET_ACTIVE_CHAT,
    payload: {
      chatId: chatId
    }
  }
}

export const getChatsRequest = (userId: string) => {
  return (dispatch: Dispatch) => {
    database().ref('users').child(userId).child('chats').on('value', (snapshot) => {
      let chats: Chat[] = [];

      snapshot.forEach((childItem) => {
        chats.push({
          key: childItem.key,
          title: childItem.val().title,
          other: childItem.val().other
        });
      });

      // callback();

      dispatch({
        type: ChatTypes.GET_CONVERSATIONS_SUCCESS,
        payload: {
          chats: chats
        }
      });

    });
  };
};

export const getMessagesRequest = (activeChat: string) => {
  return (dispatch: Dispatch) => {
    database().ref('chats').child(activeChat)
      .child('messages').orderByChild('date')
      .on('value', (response: any) => {
        let messagesList: any[] = []

        response.forEach((item) => {
          switch (item.val().type) {
            case 'text':
              messagesList.push({
                key: item.key,
                uid: item.val().uid,
                message: item.val().message,
                date: item.val().date,
                type: 'text',
              });
              break;
            case 'image':
              messagesList.push({
                key: item.key,
                uid: item.val().uid,
                imageUrl: item.val().imageUrl,
                date: item.val().date,
                type: 'image',
              });
              break;
          }
        });

        dispatch({
          type: ChatTypes.GET_MESSAGES_SUCCESS,
          payload: {
            messages: messagesList
          }
        });
      });
  }
}

export const getMessagesOff = (activeChat: string) => {
  return (dispatch: Dispatch) => {
    database().ref('chats').child(activeChat).child('messages').off('value');
  }
}

export const sendMessageRequest = ({ type, content, owner, activeChat }: SendMessageData) => {
  return (dispatch: Dispatch) => {
    const messageId = database().ref('chats')
      .child(activeChat)
      .child('messages').push();

    switch (type) {
      case 'text':
        messageId.set({
          type,
          date: String(new Date()),
          message: content,
          uid: owner
        });
        break;
      case 'image':
        messageId.set({
          type,
          date: String(new Date()),
          imageUrl: content,
          uid: owner
        });
        break;
    }
  }
}

export const uploadImage = (imageUrl: string, callback: () => {}) => {
  return (dispatch: Dispatch) => {
    const tempKey = database().ref("chats").push().key;

    let image = storage().ref('images').child(String(tempKey));

    image.putFile(imageUrl).then(() => {
      image.getDownloadURL().then(url => {
        callback(url);
      })
    }).catch(error => {
      Alert.alert(error.code)
    });
  }
}