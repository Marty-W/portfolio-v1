import firebase from 'firebase/app'; // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import Axios from 'axios';

const firebaseConfig = {
  apiKey: 'AIzaSyBm0fPKGqH8iVxjimuO22n2HxOatENeVWk',
  authDomain: 'portfolio-9b1be.firebaseapp.com',
  databaseURL: 'https://portfolio-9b1be.firebaseio.com',
  projectId: 'portfolio-9b1be',
  storageBucket: 'portfolio-9b1be.appspot.com',
  messagingSenderId: '655874724006',
  appId: '1:655874724006:web:43c70e00e31805b9036467',
  measurementId: 'G-34CJ1ES1MR',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { Axios, db };
