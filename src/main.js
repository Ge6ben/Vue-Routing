import { createApp } from 'vue';
import {createRouter,createWebHistory} from 'vue-router'
// import firebase from 'firebase/compat/app'
// import  initializeApp from 'firebase/app';
// import TreesContainer from './components/treeFiles/TreesContainer';
import NotFoundPage from './components/UI/NotFoundPage'

import App from './App.vue';
import TheTrees from './components/treeFiles/TheTrees.vue';


const router = createRouter({
    history:createWebHistory(),
    routes:[
        
        {
            path:'/',component:TheTrees
        }
        ,{
            
            path:'/404' , component:NotFoundPage
        }
    ]
})

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
app.use(router)
// firebase.initializeApp(firebaseConfig);

app.mount('#app');
