import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB-08_NAF5Qoy7x9RVlzzV4BPFgibm1UkU",
    authDomain: "bt3103-project-b2e40.firebaseapp.com",
    databaseURL: "https://bt3103-project-b2e40.firebaseio.com",
    projectId: "bt3103-project-b2e40",
    storageBucket: "bt3103-project-b2e40.appspot.com",
    messagingSenderId: "776048596074",
    appId: "1:776048596074:web:cf8d0193c0b1c19505e613",
    measurementId: "G-6N30PEBVZ8"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;

