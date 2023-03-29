var firebaseConfig = {
    apiKey: "AIzaSyCYs74BqlHfHtmXOPJShYnAewcNDea4JZM",
    authDomain: "lets-chat-web-app-98ca5.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-98ca5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lets-chat-web-app-98ca5",
    storageBucket: "lets-chat-web-app-98ca5.appspot.com",
    messagingSenderId: "603078886694",
    appId: "1:603078886694:web:928f5b3b5b68b3d9542de7",
    measurementId: "G-KCZQTP74XW"
  };
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}




function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;

                console.log("Room name " + Room_names);

                row = "<div class ='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
                document.getElementById("output").innerHTML += row;

          });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}