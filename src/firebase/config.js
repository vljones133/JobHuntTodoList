// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyCDibqyXgcrLrcu7siAHNoXHwpUHy2E0g4',
  authDomain: 'se-job-hunter.firebaseapp.com',
  projectId: 'se-job-hunter',
  storageBucket: 'se-job-hunter.appspot.com',
  messagingSenderId: '558329380149',
  appId: '1:558329380149:web:7baade42ad5c486d45607c',
  measurementId: 'G-9QNQQEC745',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get Firestore
const db = getFirestore(app);
// Get Auth for Login
const auth = getAuth();

const analytics = getAnalytics(app);

// Export db
export { db, auth };
