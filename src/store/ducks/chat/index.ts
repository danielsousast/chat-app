import { produce } from 'immer';
import { ChatState, ChatTypes } from './types';

const initialState: ChatState = {
  contacts: [],
  chats: [],
  activeChat: '',
  activeChatTitle: '',
  messages: [],
};

const ChatReducer = (state = initialState, action: any) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ChatTypes.GET_CONTACTS_SUCCESS: {
        draft.contacts = action.payload.contacts;
        break;
      }
      case ChatTypes.SET_ACTIVE_CHAT: {
        let chatTitle = '';

        for (let i in state.chats) {
          if (state.chats[i].key === action.payload.chatId) {
            chatTitle = state.chats[i].title
          }
        }
        draft.activeChat = action.payload.chatId;
        draft.activeChatTitle = chatTitle;
        break;
      }
      case ChatTypes.CREATE_CHAT_SUCCESS: {
        draft.activeChat = action.payload.chatId;
        draft.activeChatTitle = action.payload.chatTitle;
        break;
      }
      case ChatTypes.GET_CONVERSATIONS_SUCCESS: {
        draft.chats = action.payload.chats;
        break;
      }
      case ChatTypes.GET_MESSAGES_SUCCESS: {
        draft.messages = action.payload.messages;
        break;
      }
      default:
        return state;
    }
  });
};

export default ChatReducer;
