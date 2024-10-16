import firebase from 'firebase/app';  // Import 'firebase/app' to initialize Firebase
import "firebase/storage";
import "firebase/auth";
import "firebase/database";  // Ensure that you import the Firebase Database

const firebaseConfig = {
  apiKey: "AIzaSyDTolY0ekX_90RtcmNYxGahcTMWkRcxAtA",
  authDomain: "cc-project-b0832.firebaseapp.com",
  projectId: "cc-project-b0832",
  storageBucket: "cc-project-b0832.appspot.com",
  messagingSenderId: "485680233742",
  appId: "1:485680233742:web:790e6e3e733d43fa89eb5f",
  databaseURL:"https://cc-project-b0832-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const database = firebase.database();
const auth = firebase.auth();
export const storage = firebase.storage();
console.log("Database URL: ", process.env.REACT_APP_DATABASE_URL);


export { auth, database };
