


// function google sign in
function onSignIn(googleUser) {
    const google_token = googleUser.getAuthResponse().id_token;
    
    // send google token ke back end
    $.ajax ({
        method:'POST',
        url : 'http://localhost:3000/users/googleLogin',
        headers: {google_token}
    })
    .done( response => {
        console.log(res)
        
    })
    .fail( err => {
        console.log(err)
    })
    
}

// function google sign out
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}