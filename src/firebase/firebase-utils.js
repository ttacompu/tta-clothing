import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCScUKYiKsWLm70C3DFai77ahOxnsC-1Qs",
    authDomain: "crwn-db-598f7.firebaseapp.com",
    databaseURL: "https://crwn-db-598f7.firebaseio.com",
    projectId: "crwn-db-598f7",
    storageBucket: "crwn-db-598f7.appspot.com",
    messagingSenderId: "881713169763",
    appId: "1:881713169763:web:dcfd6e0080e307e3e33f56",
    measurementId: "G-715GWXV7SS"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
