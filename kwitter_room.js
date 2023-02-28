
//ADD YOUR FIREBASE LINKS HERE
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
    username=localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML="welcome "+ username + "!";

     function addroom(){
      roomname=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(roomname).update({
             purpose:"adding room name "
      });
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html"
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;

      });});}
getData();

function redirecttoroomname(name){
      console.log (name);
window.location="kwitter_page.html";
localStorage.setitem("room_name",name);
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}