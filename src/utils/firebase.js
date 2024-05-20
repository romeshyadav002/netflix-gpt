// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfMowBYg4QSkC0V1q4LGGR3WYwu1r5W_0',
  authDomain: 'netflixgpt-58e5e.firebaseapp.com',
  projectId: 'netflixgpt-58e5e',
  storageBucket: 'netflixgpt-58e5e.appspot.com',
  messagingSenderId: '501496930105',
  appId: '1:501496930105:web:0057d11e538536f1fe12e8',
  measurementId: 'G-2XGPE69GL1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
