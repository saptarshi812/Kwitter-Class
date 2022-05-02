const firebaseConfig = {
      apiKey: "AIzaSyAfvvEPV36fyHoZxYdcgjwJEZx67nHwHww",
      authDomain: "kwitter-e120d.firebaseapp.com",
      databaseURL: "https://kwitter-e120d-default-rtdb.firebaseio.com",
      projectId: "kwitter-e120d",
      storageBucket: "kwitter-e120d.appspot.com",
      messagingSenderId: "459026750593",
      appId: "1:459026750593:web:0000c7fffffe2728c14180",
      measurementId: "G-GHK8J1BKLZ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
Username=localStorage.getItem("username");
document.getElementById("Welcome").innerHTML="Welcome "+Username+"!";

function addroom(){
      var roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      })
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}
      //End code
     
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}