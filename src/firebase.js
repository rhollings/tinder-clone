import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBa65-XQg5Ta8FR9P_3pcz9_DjgRtFgTLk",
    authDomain: "tinder-clone-81571.firebaseapp.com",
    projectId: "tinder-clone-81571",
    storageBucket: "tinder-clone-81571.appspot.com",
    messagingSenderId: "818808318529",
    appId: "1:818808318529:web:ef86e25fc44f12a8d7f4c0",
    measurementId: "G-308J3Y3QP2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;