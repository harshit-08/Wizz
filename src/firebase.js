import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDxqjjJYFYOxkCyxMfcDiG40jYa2VJQT48",
    authDomain: "wizz-b120d.firebaseapp.com",
    projectId: "wizz-b120d",
    storageBucket: "wizz-b120d.appspot.com",
    messagingSenderId: "92097962826",
    appId: "1:92097962826:web:6ef55ba4d71ea3f89817b3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };