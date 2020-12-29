import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9S7K-fvIZc4iA1NJHMWGN3-U3KTF7Q7o",
  authDomain: "ecom-db-d71a0.firebaseapp.com",
  databaseURL: "https://ecom-db-d71a0-default-rtdb.firebaseio.com",
  projectId: "ecom-db-d71a0",
  storageBucket: "ecom-db-d71a0.appspot.com",
  messagingSenderId: "399772318381",
  appId: "1:399772318381:web:1152066e5f163d8e962424",
  measurementId: "G-W3LJVYREYQ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("CATCHING FB ERR", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
