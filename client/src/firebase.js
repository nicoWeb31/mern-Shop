import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIobFs-lF27xxhSCMDCV7paaN_fjc7tBk",
    authDomain: "ecommerce-eb498.firebaseapp.com",
    projectId: "ecommerce-eb498",
    storageBucket: "ecommerce-eb498.appspot.com",
    messagingSenderId: "461131612334",
    appId: "1:461131612334:web:5222cfd8c2bf7ab3eeed3f",
    measurementId: "G-43TPT6PXV3",
};

// initialize firebase app
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
