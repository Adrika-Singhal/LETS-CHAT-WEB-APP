
var firebaseConfig = {
    apiKey: "AIzaSyAW9N70_IgmA1uY2FfnFS6RJJlsHOQHcoE",
    authDomain: "kwitter-843d2.firebaseapp.com",
    databaseURL: "https://kwitter-843d2-default-rtdb.firebaseio.com",
    projectId: "kwitter-843d2",
    storageBucket: "kwitter-843d2.appspot.com",
    messagingSenderId: "730024144398",
    appId: "1:730024144398:web:36aecf0aaf4ba66f5e165f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();