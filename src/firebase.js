// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnIJ6hn2zWI-C4QEFAidSrL-RQS8NFMXk',
  authDomain: 'netflix-react-ad.firebaseapp.com',
  projectId: 'netflix-react-ad',
  storageBucket: 'netflix-react-ad.appspot.com',
  messagingSenderId: '794081372859',
  appId: '1:794081372859:web:35b70f81d22bc4218bd79e'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)