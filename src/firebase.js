import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCqM7m9yCFLEP0Ha4owxO3wz4ZBRtzhDgU",
    authDomain: "crm-project-c614d.firebaseapp.com",
    databaseURL: "https://crm-project-c614d.firebaseio.com",
    projectId: "crm-project-c614d",
    storageBucket: "crm-project-c614d.appspot.com",
    messagingSenderId: "61175138172",
    appId: "1:61175138172:web:0e16e73a15e9ecdb4986f9",
    measurementId: "G-V3SXVD8EW2",
}

firebase.initializeApp(config);

export default firebase;