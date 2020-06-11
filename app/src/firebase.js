import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB8gLTzw02DyeK2f5SWpttlaM2YWlv1s3g",
    authDomain: "bikershub-dadd0.firebaseapp.com",
    databaseURL: "https://bikershub-dadd0.firebaseio.com",
    projectId: "bikershub-dadd0",
    storageBucket: "bikershub-dadd0.appspot.com",
    messagingSenderId: "41609801202",
    appId: "1:41609801202:web:c48813bcce3fff6e4a0f6b",
    measurementId: "G-RZ4HFL9HKW",
};

firebase.initializeApp(config);
// Exports the auth method from firebase
export const auth = firebase.auth();
// Exports the firestore method from firebase
export const firestore = firebase.firestore();
