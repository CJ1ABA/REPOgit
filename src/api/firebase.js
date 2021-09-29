import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcI8FQ5EYIuBAUUKRZn9pLXZCm6QOtpmo",
    authDomain: "myfirstprj-3c2c2.firebaseapp.com",
    databaseURL: "https://myfirstprj-3c2c2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myfirstprj-3c2c2",
    storageBucket: "myfirstprj-3c2c2.appspot.com",
    messagingSenderId: "575839055049",
    appId: "1:575839055049:web:e9d0d2c744aa638282b118",
    measurementId: "G-YG5TF3T7BR"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.database();