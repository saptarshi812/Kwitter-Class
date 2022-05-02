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
    firebase.initializeApp(firebaseConfig);//YOUR FIREBASE LINKS
    Username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data);
console.log(firebase_message_id);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> Like: "+like+"</span> </button> <hr>";

row=namewithtag+messagewithtag+like_button+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({

            name:Username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

}
function updatelike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedlikes=Number(likes)+1;
firebase.database().ref(roomname).child(message_id).update({
      like:updatedlikes
});
}