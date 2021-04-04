
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAugtaQhTGuIP0JCE_i83X4OPu1vWvQftw",
    authDomain: "kwitter-ba785.firebaseapp.com",
    databaseURL: "https://kwitter-ba785-default-rtdb.firebaseio.com",
    projectId: "kwitter-ba785",
    storageBucket: "kwitter-ba785.appspot.com",
    messagingSenderId: "883009973900",
    appId: "1:883009973900:web:da0b3bf3b39ecc93f3d5a9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value 
    firebase.database().ref("/").child(user_name).update({
        purpose : "eating user"
    });
}