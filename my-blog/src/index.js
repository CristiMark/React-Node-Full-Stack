import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdjtbYftQlQ7vF7kAun2_k7u0gZQ0Pu7g",
  authDomain: "my-react-blog-a0a33.firebaseapp.com",
  projectId: "my-react-blog-a0a33",
  storageBucket: "my-react-blog-a0a33.appspot.com",
  messagingSenderId: "967574909709",
  appId: "1:967574909709:web:cdc95e1c3726281fbff644"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
