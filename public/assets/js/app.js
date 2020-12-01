
    const firebaseConfig = {

        apiKey: "AIzaSyDd-dKBBxrgEwSaDcTKntk2tJYXjPOoRZ0",
        authDomain: "canded-1ccc6.firebaseapp.com",
        databaseURL: "https://canded-1ccc6.firebaseio.com",
        projectId: "canded-1ccc6",
        storageBucket: "canded-1ccc6.appspot.com",
        messagingSenderId: "821988719347",
        appId: "1:821988719347:web:f58ad1fbd04a71fe80d586",
        measurementId: "G-KET84ERS81"

    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

    var email = document.getElementById(inputEmail).nodeValue;

    var password = document.getElementById(inputPassword).nodeValue;

   


    document.getElementById("btnLogin").addEventListener("click", 
    function(){
         alert(email + " &"+ password);
    });


    document
        .getElementById("google")
        .addEventListener("click", (event) => {

            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithRedirect(provider);
            firebase.auth().getRedirectResult().then(function (result) {
                if (result.credential) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // ...
                    window.location.assign("/subscribe");
                }
                // The signed-in user info.
                var user = result.user;
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        });

    document
        .getElementById("facebook")
        .addEventListener("click", (event) => {

            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithRedirect(provider);
            firebase.auth().getRedirectResult().then(function (result) {
                if (result.credential) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // ...
                    window.location.assign("/subscribe");
                }
                // The signed-in user info.
                var user = result.user;
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

        });


