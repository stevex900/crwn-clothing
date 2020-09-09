import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAB81-M6eRKxZHd5N0TLwerir9oYE1mnc",
  authDomain: "crwn-db-b17d8.firebaseapp.com",
  databaseURL: "https://crwn-db-b17d8.firebaseio.com",
  projectId: "crwn-db-b17d8",
  storageBucket: "crwn-db-b17d8.appspot.com",
  messagingSenderId: "526096901870",
  appId: "1:526096901870:web:60bd2eca344fc99aad35ff",
  measurementId: "G-S6HYHG42HZ",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
