import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ChatPage from '../../pages/ChatPage';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';

export default function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage currentUser={currentUser} />
        </Route>
        <Route path="/signup">
          <SignUpPage currentUser={currentUser} />
        </Route>
        <Route path="/">
          <ChatPage currentUser={currentUser} />
        </Route>
      </Switch>
    </Router>
  );
}
