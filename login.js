// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: 'dashboard.html',
    signInOptions: [
  
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
  
    ],
    // Terms of service url.
    tosUrl: 'dashboard.html'
  };
  
  
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
  ui.start('#firebaseui-auth-container', uiConfig);