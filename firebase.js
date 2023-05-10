var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyDC3tJilHWZq5sUCR7nRTN3FR208VqN30I",
  authDomain: "kodegoweb.firebaseapp.com",
  databaseURL: "https://kodegoweb-default-rtdb.firebaseio.com",
  projectId: "kodegoweb",
  storageBucket: "kodegoweb.appspot.com",
  messagingSenderId: "248768563732",
  appId: "1:248768563732:web:c42353d67f1c08e0787501"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


