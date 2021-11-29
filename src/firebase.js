import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDZuKc1-MpZKwG7QTlXmgOue1ZgveZX_Fs",
    authDomain: "crud-41f57.firebaseapp.com",
    projectId: "crud-41f57",
    storageBucket: "crud-41f57.appspot.com",
    messagingSenderId: "767622304064",
    appId: "1:767622304064:web:157d04d7d0c14763b82aa5"

    //apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    //authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN ,
    //projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    //storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    //messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    //appId: process.env.REACT_APP_FIREBASE_APPID


  };
  
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)

