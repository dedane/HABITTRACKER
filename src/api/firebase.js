import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAz3e79qUVzhZUxOozgFXJkyIRy9sZtKIY",
  authDomain: "reactive-ed93c.firebaseapp.com",
  databaseURL: "https://reactive-ed93c-default-rtdb.firebaseio.com",
  projectId: "reactive-ed93c",
  storageBucket: "reactive-ed93c.appspot.com",
  messagingSenderId: "1013498342049",
  appId: "1:1013498342049:web:687e442473e4a4afb09ee0",
  measurementId: "G-368E06QP65"
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this.firebase = firebase;
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
    this.db = firebase.database();
  }
}

export default Firebase;
