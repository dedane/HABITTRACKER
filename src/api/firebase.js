import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHLmRffRtPwXDi8wOj40CN93R4se_GqOE",
  authDomain: "habittracker-c7cee.firebaseapp.com",
  databaseURL: "https://habittracker-c7cee-default-rtdb.firebaseio.com/",
  projectId:"habittracker-c7cee",
  storageBucket: "habittracker-c7cee.appspot.com",
  messagingSenderId: "839491567874",
  appId:"1:839491567874:web:db6d3f74c7a91e95e0021b",
  measurementId: "G-12Y57PW3BL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const app = {
  firebase,
  auth: firebase.auth(),
  firestore: firebase.firestore(),
  db: firebase.database(),
};

export default app;