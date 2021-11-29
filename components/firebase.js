// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-sax6qUO0SrL1H3jSxa3alwdpP-Rb4Ro",
  authDomain: "gbvapp-476b6.firebaseapp.com",
  projectId: "gbvapp-476b6",
  storageBucket: "gbvapp-476b6.appspot.com",
  messagingSenderId: "583931464441",
  appId: "1:583931464441:web:1c75574be221b10c05f028",
  measurementId: "G-RR4V5Q1NWS"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };




//const analytics = getAnalytics(app);