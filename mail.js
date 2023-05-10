const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyDC3tJilHWZq5sUCR7nRTN3FR208VqN30I",
  authDomain: "kodegoweb.firebaseapp.com",
  databaseURL: "https://kodegoweb-default-rtdb.firebaseio.com",
  projectId: "kodegoweb",
  storageBucket: "kodegoweb.appspot.com",
  messagingSenderId: "248768563732",
  appId: "1:248768563732:web:c42353d67f1c08e0787501"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};



function login()
{

  
    let userName = document.getElementById("userInput").value;
    let userPass = document.getElementById("userPass").value;
   
   firebase.auth().signInWithEmailAndPassword(userName, userPass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorCode + errorMessage);
   });


}