import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import * as firebase from "firebase/app";   

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS13noIluraEAKB7D4EcBuE0boFtJOv0Q",
  authDomain: "superpet-bark.firebaseapp.com",
  databaseURL: "https://superpet-bark-default-rtdb.firebaseio.com",
  projectId: "superpet-bark",
  storageBucket: "superpet-bark.appspot.com",
  messagingSenderId: "201944766864",
  appId: "1:201944766864:web:bf4a41b47909a1ebe87b15"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

ReactDOM.render(<App />, document.getElementById('root'));
