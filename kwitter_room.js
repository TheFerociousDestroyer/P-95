
const firebaseConfig = {
  apiKey: "AIzaSyB0jqC_wU-dB-dFh6VXrZO5HpOAW4TnAoQ",
  authDomain: "dummy-project-6b5a7.firebaseapp.com",
  databaseURL: "https://dummy-project-6b5a7-default-rtdb.firebaseio.com",
  projectId: "dummy-project-6b5a7",
  storageBucket: "dummy-project-6b5a7.appspot.com",
  messagingSenderId: "899917951958",
  appId: "1:899917951958:web:f696e99e9c14b68d2f6a77"
};

// Initialize Firebase
firebase.initializeApp(Config);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -"+ Room_names);
row ="<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

addRoom()
{
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
  purpose : "Adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
      //End code
      });});}
getData();
