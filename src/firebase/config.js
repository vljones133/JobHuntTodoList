import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCDibqyXgcrLrcu7siAHNoXHwpUHy2E0g4',
  authDomain: 'se-job-hunter.firebaseapp.com',
  projectId: 'se-job-hunter',
  storageBucket: 'se-job-hunter.appspot.com',
  messagingSenderId: '558329380149',
  appId: '1:558329380149:web:7baade42ad5c486d45607c',
  measurementId: 'G-9QNQQEC745',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const analytics = getAnalytics(app);

export { firebase };
