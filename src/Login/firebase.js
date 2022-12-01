import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
    apiKey: "AIzaSyBAG0hSupPruQhUyWOhvvF6fQul_s4C1AY",
    authDomain: "fraction-webapp.firebaseapp.com",
    projectId: "fraction-webapp",
    storageBucket: "fraction-webapp.appspot.com",
    messagingSenderId: "477071463002",
    appId: "1:477071463002:web:bc3cf2bddb010347ee3e63",
    measurementId: "G-VMHZM1XQ3C"
};

const fire = firebase.initializeApp(config);
export default fire;