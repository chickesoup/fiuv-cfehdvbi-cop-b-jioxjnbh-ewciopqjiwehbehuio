
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
