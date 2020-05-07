import * as firebase from 'firebase';

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyANBWBR4fSx-dpo5KmkMxpyAXjy2V6WQlU",
    authDomain: "covid-web-704d0.firebaseapp.com",
    databaseURL: "https://covid-web-704d0.firebaseio.com",
    projectId: "covid-web-704d0",
    storageBucket: "covid-web-704d0.appspot.com",
    messagingSenderId: "96586993761",
    appId: "1:96586993761:web:dc17f95d9f06a91895da20"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();