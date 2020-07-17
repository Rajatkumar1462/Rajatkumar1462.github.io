// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    apiKey: "AIzaSyDq7IT9MaUwTvqq6qPTh_TTWPWs5NgfGHQ",
    authDomain: "login-9c860.firebaseapp.com",
    databaseURL: "https://login-9c860.firebaseio.com",
    projectId: "login-9c860",
    storageBucket: "login-9c860.appspot.com",
    messagingSenderId: "47264876848",
    appId: "1:47264876848:web:d6a6f5d5394a3d7cb2e0f5",
    measurementId: "G-7TKYEKWDD7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function senddata(){

    var Username  = document.getElementById("name").value;
    var email  = document.getElementById("email").value;
    var message  = document.getElementById("message").value;
    console.log(Username);
    writeUserData(Username, email, message);
}

function writeUserData(Username, emailID, Usermessage) {
    firebase.database().ref("emails/" + Username).set({
        email:emailID,
        message:Usermessage
    });
  }