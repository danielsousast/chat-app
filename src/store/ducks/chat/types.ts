export enum ChatTypes {
  GET_CONTACTS_REQUEST = '@chat/GET_CONTACTS_REQUEST',
  GET_CONTACTS_SUCCESS = '@chat/GET_CONTACTS_SUCCESS',
  GET_CONTACTS_FAILURE = '@chat/GET_CONTACTS_FAILURE',
  SET_ACTIVE_CHAT = '@chat/SET_ACTIVE_CHAT',
  GET_CONVERSATIONS_REQUEST = '@chat/GET_CONVERSATIONS_REQUEST',
  GET_CONVERSATIONS_SUCCESS = '@chat/GET_CONVERSATIONS_SUCCESS',
  CREATE_CHAT_SUCCESS = '@chat/CREATE_CHAT_SUCCESS ',
  GET_MESSAGES_SUCCESS = '@chat/GET_MESSAGES_SUCCESS',
}

export interface Contact {
  key: string;
  name: string;
}

export interface Conversation {
  key: string;
  title: string;
}

export interface Chat {
  key: string;
  title: string;
  other: string;
}

export interface Message {
  key: string;
  message?: string;
  uid: string;
  date: Date | string;
  formattedDate?: Date;
  type: string;
}

export interface SendMessageData {
  content: string;
  owner: string;
  activeChat: string;
  type: string;
}

export interface ChatState {
  readonly contacts: Contact[];
  readonly activeChat: string;
  readonly activeChatTitle: string;
  readonly chats: Chat[];
  readonly messages: Message[]
}
