import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Message } from '../../store/ducks/chat/types';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    justify-content:space-between;
`;

export const Content = styled.View`
    flex:1;
   
`;

export const MessageList = styled(FlatList as new () => FlatList<Message>)`

`;

export const Footer = styled.View`
    width:100%;
    height: 70px;
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background:#fff;
`;

export const SendIput = styled.TextInput`
    width: 100%;
    flex:1;
    height: 40px;
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 15px;
    border-bottom-width:1px;
    border-bottom-color:#ccc;
`;

export const SendButton = styled.TouchableHighlight`
    width: 45px;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`;

export const AttachmentButton = styled.TouchableHighlight`
    width: 45px;
    height: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`;

export const ImagePreviewContent = styled.View`
    height: 100px;
    margin:8px;
`;

export const ImagePreview = styled.Image`
    width:100px;
    height: 100px;
`;