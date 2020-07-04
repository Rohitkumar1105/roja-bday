import firebase from 'firebase/app'
import 'firebase/storage'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAp19Rdk1JfTWjj4lDnCR5RTjeFDQ5iLlE",
    authDomain: "rojabday.firebaseapp.com",
    databaseURL: "https://rojabday.firebaseio.com",
    projectId: "rojabday",
    storageBucket: "rojabday.appspot.com",
    messagingSenderId: "134527716252",
    appId: "1:134527716252:web:abc58775aa814b75255659"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }