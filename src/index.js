import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
    <App />
    </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWlG1WJloYOUaKr3NNdQ43ojN0-1H2vt0",
  authDomain: "tokakuka.firebaseapp.com",
  projectId: "tokakuka",
  storageBucket: "tokakuka.appspot.com",
  messagingSenderId: "358352064121",
  appId: "1:358352064121:web:c99b39e9a055b143254ea8",
  measurementId: "G-H1Y22DCTZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);