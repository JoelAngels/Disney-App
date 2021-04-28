import firebase from "firebase";

//got the firebase key from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyB1Dm8wUwMOunyuoR_wdWHVEjZnST2Qieg",
  authDomain: "disney-joel.firebaseapp.com",
  projectId: "disney-joel",
  storageBucket: "disney-joel.appspot.com",
  messagingSenderId: "384955175036",
  appId: "1:384955175036:web:309ca5e23c94a0a85939f9",
  measurementId: "G-ZQV9CQ0BN1",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//connecting database,
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //the real database
const auth = firebase.auth(); //authentication
const provider = new firebase.auth.GoogleAuthProvider(); //we use provider to wrap the whole Application so that we can get any data we want to different
const storage = firebase.storage(); //where we will store our images and videos

export { auth, provider, storage };

export default db;
