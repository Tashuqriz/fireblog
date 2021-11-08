import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCdiFw4PIvkFVzHJxMLmnAmBkqG6JikEyU",
    authDomain: "fireblogsyt-bf363.firebaseapp.com",
    projectId: "fireblogsyt-bf363",
    storageBucket: "fireblogsyt-bf363.appspot.com",
    messagingSenderId: "360818574893",
    appId: "1:360818574893:web:05ef24c67f774692d6daa4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp};
  export default firebaseApp.firestore();