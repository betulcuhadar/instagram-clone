// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvPAklJ394u4fQXu-RIou-4r0X-Nv9qEE",
  authDomain: "instagram-clone-b8eb8.firebaseapp.com",
  projectId: "instagram-clone-b8eb8",
  storageBucket: "instagram-clone-b8eb8.appspot.com",
  messagingSenderId: "686369714446",
  appId: "1:686369714446:web:9fb6aa5e58532cbce4275f",
};

// Initialize Firebase
!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.apps();

const db = firebase.firestore();

export { firebase, db };
