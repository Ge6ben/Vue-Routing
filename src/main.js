import { createApp } from 'vue';

// import firebase from 'firebase/compat/app'
// import  initializeApp from 'firebase/app';

import App from './App.vue';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAuDVWei4Hk8OPbQLm5GlXIveC3paRwtao",
//   authDomain: "breathe-free-daa83.firebaseapp.com",
//   databaseURL: "https://breathe-free-daa83-default-rtdb.firebaseio.com",
//   projectId: "breathe-free-daa83",
//   storageBucket: "breathe-free-daa83.appspot.com",
//   messagingSenderId: "128769810072",
//   appId: "1:128769810072:web:3984b91ed4d9d7bd7f7aed"
// };

// console.log(firebase)
// Initialize Firebase

// console.log(firebase)
const app = createApp(App);

// firebase.initializeApp(firebaseConfig);

app.mount('#app');
