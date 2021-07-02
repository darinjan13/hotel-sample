import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzBPzM4WDeWa2m0XP5UygrN95shmD6VPE",
    authDomain: "my-db-a308c.firebaseapp.com",
    databaseURL: "https://my-db-a308c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-db-a308c",
    storageBucket: "my-db-a308c.appspot.com",
    messagingSenderId: "1094014654145",
    appId: "1:1094014654145:web:58bf16b31ee5d0adabe640"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();