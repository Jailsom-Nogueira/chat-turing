import React, { useEffect, useRef, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/storage';

import {
  ChatPageWrapper,
  Header,
  HeaderBox,
  Messages,
  MessageForm,
  FileInput,
  IconInput,
  ImgContainer,
} from './styles';
import { StyledButton } from '../../styles/Buttons';
import { MessageInput } from '../../styles/Inputs';

const orderingChatId = (id1, id2) => {
  if (id1 > id2) {
    return `${id1}-${id2}`;
  } else {
    return `${id2}-${id1}`;
  }
};

export default function ChatContainer(props) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef();

  useEffect(() => {
    const getMessages = async () => {
      let chatId = orderingChatId(props.currentUserId, props.selectedUser.id);

      const query = firebase
        .firestore()
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .orderBy('sentAt', 'desc');

      query.onSnapshot((querySnapshot) => {
        const messagesListDoc = querySnapshot.docs.map((doc) => {
          return doc.data();
        });

        setMessages(messagesListDoc);
      });
    };

    getMessages();
  }, [props.currentUserId, props.selectedUser.id]);

  const onChangeNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleFile = async (event) => {
    try {
      const file = fileInputRef.current.files[0];
      setFileName(file.name);
    } catch (err) {
      alert(err.message);
    }
  };

  const uploadFileAndGetUrl = async () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      const storageRef = firebase.storage().ref();
      const newFileRef = storageRef.child(file.name);
      await newFileRef.put(file);

      return newFileRef.getDownloadURL();
    }
    return null;
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    let chatId = orderingChatId(props.currentUserId, props.selectedUser.id);

    const fileUrl = await uploadFileAndGetUrl();

    const ref = firebase
      .firestore()
      .collection('chats')
      .doc(chatId)
      .collection('messages');

    ref
      .add({
        sentAt: new Date(),
        text: newMessage,
        userName: props.currentUserName,
        image: fileUrl,
      })
      .then(() => {
        setNewMessage('');
      });
  };

  return (
    <ChatPageWrapper>
      <Header>
        <HeaderBox>
          <h4>Chat with {props.selectedUser.name}</h4>
        </HeaderBox>
      </Header>
      <Messages>
        {messages &&
          messages.map((message) => {
            return (
              <div key={message.id}>
                <p>
                  {message.userName} - {message.text}
                </p>
                {message.image && <ImgContainer src={message.image} />}
              </div>
            );
          })}
      </Messages>
      <MessageForm onSubmit={sendMessage}>
        <MessageInput
          placeholder="Nova mensagem"
          value={newMessage}
          onChange={onChangeNewMessage}
        />
        <FileInput
          type={'file'}
          ref={fileInputRef}
          id={'fileInput'}
          onChange={handleFile}
        />
        <label htmlFor={'fileInput'}>
          <IconInput />
        </label>
        {fileName && <p>{fileName}</p>}
        <StyledButton> Send </StyledButton>
      </MessageForm>
    </ChatPageWrapper>
  );
}
