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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createAt = new Date();

          try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData

            })
          }
          catch(error){ 
              console.log('error creating user', error.message);

          }
      }

      return userRef;
      
  }

  export default firebase;
