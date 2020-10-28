import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ChatContainer from './Chatcontainer';
import UsersList from './UsersList';

import {
  ChatPageContainer,
  ChatIconContainer,
  ChatIconPlaceholder,
} from './styles';

import firebase from 'firebase/app';

export default function ChatPage(props) {
  const [selectedUser, setSelectedUser] = useState();

  const history = useHistory();

  const [currentUserData, setCurrentUserData] = useState();
  useEffect(() => {
    if (props.currentUser) {
      firebase
        .firestore()
        .collection('users')
        .doc(props.currentUser.uid)
        .get()
        .then((doc) => {
          setCurrentUserData(doc.data());
        });
    }
  }, [props.currentUser, props.currentUser?.uid]);

  useEffect(() => {
    if (props.currentUser === null) {
      history.push('/login');
    }
  }, [history, props.currentUser]);

  const showContent = props.currentUser && (
    <>
      <UsersList
        setSelectedUser={setSelectedUser}
        currentUser={props.currentUser}
        currentUserData={currentUserData}
      />
      {selectedUser ? (
        <ChatContainer
          currentUserId={props.currentUser?.uid}
          selectedUser={selectedUser}
          currentUserName={currentUserData?.name}
        />
      ) : (
        <ChatIconContainer>
          <ChatIconPlaceholder />
        </ChatIconContainer>
      )}
    </>
  );

  return <ChatPageContainer>{showContent}</ChatPageContainer>;
}
