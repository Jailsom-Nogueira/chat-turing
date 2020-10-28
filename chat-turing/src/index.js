import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBXE3XIuMExI9MTmScCP-D3ew6hQlt6WZI',
  authDomain: 'chat-turing.firebaseapp.com',
  databaseURL: 'https://chat-turing.firebaseio.com',
  projectId: 'chat-turing',
  storageBucket: 'chat-turing.appspot.com',
  messagingSenderId: '103559163398',
  appId: '1:103559163398:web:f945176171bd0b0c75dd87',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
