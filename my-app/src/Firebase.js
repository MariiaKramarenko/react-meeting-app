import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyCNg3iqDIHbPyVp_XqHxFN_PaduOp8tpDQ",
    authDomain: "react-meeting-93551.firebaseapp.com",
    databaseURL: "https://react-meeting-93551.firebaseio.com",
    projectId: "react-meeting-93551",
    storageBucket: "react-meeting-93551.appspot.com",
    messagingSenderId: "167085281828",
    appId: "1:167085281828:web:2949e238a539556bffbeb1"
  };
  // Initialize Firebase
 firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;