
const firebaseConfig = {
  apiKey: "AIzaSyAeq8vdZ99I9_ZkdC3JHppWxHPFnsNEpEg",
  authDomain: "lets-chat-4d7d0.firebaseapp.com",
  projectId: "lets-chat-4d7d0",
  storageBucket: "lets-chat-4d7d0.appspot.com",
  messagingSenderId: "499696770269",
  appId: "1:499696770269:web:d9c49dda5817d88d190f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function add_room()
{
      Room_names = document.getElementById("room").value;

      firebase.database().ref("/").child(Room_names).update({
      purpose : "adding room name"            
      });

      localStorage.setItem("Room_name", Room_names);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNamw(this.id)' >#" + Room_names +"</div><hr>";
 document.getElementById("output").innerHTML +=row;
 //End code
 });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("Room_name", name);
       window.location = "kwitter_page.html"

}