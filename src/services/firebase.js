import { initializeApp } from 'firebase/app';
import "firebase/compat/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AAIzaSyCr05SNxAmTUi-8oZqqaVdkslgtFZibp0E",
    authDomain: "emotive-d338a.firebaseapp.com",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
    projectId: "emotive-d338a",
    storageBucket: "emotive-d338a.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    measurementId: "G-MEASUREMENT_ID",
  };


  export const app = initializeApp(firebaseConfig);