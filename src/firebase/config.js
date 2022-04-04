import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc0Epy9lxkvnnLC_VYw9zu6gGzvOLIXV0",
  authDomain: "travel-app-fe766.firebaseapp.com",
  projectId: "travel-app-fe766",
  storageBucket: "travel-app-fe766.appspot.com",
  messagingSenderId: "326307202812",
  appId: "1:326307202812:web:1ae55bd95a9e732c7ab979",
};

// initializing firebase
firebase.initializeApp(firebaseConfig);

// initializing firestore
const firebaseStorage = firebase.firestore();

export { firebaseStorage };
