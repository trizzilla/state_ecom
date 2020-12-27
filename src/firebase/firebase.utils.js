import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9S7K-fvIZc4iA1NJHMWGN3-U3KTF7Q7o",
  authDomain: "ecom-db-d71a0.firebaseapp.com",
  projectId: "ecom-db-d71a0",
  storageBucket: "ecom-db-d71a0.appspot.com",
  messagingSenderId: "399772318381",
  appId: "1:399772318381:web:1152066e5f163d8e962424",
  measurementId: "G-W3LJVYREYQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
