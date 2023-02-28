//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAchsIopZNth8HKTUdt7iO09Ylemga-ZG0",
      authDomain: "kwitter-845dd.firebaseapp.com",
      databaseURL: "https://kwitter-845dd-default-rtdb.firebaseio.com",
      projectId: "kwitter-845dd",
      storageBucket: "kwitter-845dd.appspot.com",
      messagingSenderId: "757556512925",
      appId: "1:757556512925:web:fb713241bafeacb71fac74"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    roomname=localStorage.getItem("room_name");
    username=localStorage.getItem("user_name");
   function send(){
      var msg=document.getElementById("msg").value ;
firebase.database().ref(roomname).push({
      name:username,
      message:msg,
      like:0
});s


   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
