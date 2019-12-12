import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 

const config = {
    apiKey: "AIzaSyBl9DR8L714xZk0IvZ4eJqhE7PIsVvFc18",
    authDomain: "crwn-db-35e8e.firebaseapp.com",
    databaseURL: "https://crwn-db-35e8e.firebaseio.com",
    projectId: "crwn-db-35e8e",
    storageBucket: "crwn-db-35e8e.appspot.com",
    messagingSenderId: "204347202419",
    appId: "1:204347202419:web:abfa27e5d2d1e6dd448306",
    measurementId: "G-9RDBYRYF1J"
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;