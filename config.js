import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC-O_3ucMfKrR0UWwDO6CDOVcUfzn-8LXg",
    authDomain: "e-ride-bdda7.firebaseapp.com",
    projectId: "e-ride-bdda7",
    storageBucket: "e-ride-bdda7.appspot.com",
    messagingSenderId: "615110838099",
    appId: "1:615110838099:web:f1518e3c6da1f2453ec3a6"
  };

  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
