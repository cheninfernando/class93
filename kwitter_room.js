const firebaseConfig = {
      apiKey: "AIzaSyC2RzZlYc1zRcEHAzlZaRcbSMSDLGfVrTY",
      authDomain: "let--s-chat-9b92f.firebaseapp.com",
      databaseURL: "https://let--s-chat-9b92f-default-rtdb.firebaseio.com",
      projectId: "let--s-chat-9b92f",
      storageBucket: "let--s-chat-9b92f.appspot.com",
      messagingSenderId: "70731818191",
      appId: "1:70731818191:web:059d6a3374a5e4d24d83ba"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
