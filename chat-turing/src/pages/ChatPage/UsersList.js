import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';

import { UsersListWrapper, UsersHeader, ChatUserName } from './styles';
import { StyledButton } from '../../styles/Buttons';

export default function UsersList(props) {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const query = await firebase.firestore().collection('users').get();

      const usersListDoc = query.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setUsers(usersListDoc);
    };

    getUsers();
  }, []);

  const onClickUser = (user) => {
    props.setSelectedUser(user);
  };

  const onClickLogout = () => {
    firebase
      .auth()
      .signOut()
      .catch(() => {
        alert(
          'Não foi possível deslogar, por favor, tente novamente mais tarde',
        );
      });
  };

  return (
    <UsersListWrapper>
      <UsersHeader>
        <p>{props.currentUserData?.name}</p>
        <StyledButton onClick={onClickLogout}>Logout</StyledButton>
      </UsersHeader>

      <hr />
      <p>Chats</p>
      {users ? (
        users
          .filter((user) => user.id !== props.currentUser?.uid)
          .map((user) => {
            return (
              <ChatUserName key={user.id} onClick={() => onClickUser(user)}>
                <p>{user.name}</p>
              </ChatUserName>
            );
          })
      ) : (
        <div>
          <p>No users to show</p>
        </div>
      )}
    </UsersListWrapper>
  );
}
