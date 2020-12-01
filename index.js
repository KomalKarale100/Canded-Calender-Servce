
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const express = require("express");

const csrfMiddleware = csrf({ cookie: true });

const PORT = process.env.PORT || 3000;
const app = express();

app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);

app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
});

app.get("/login", function (req, res) {
  res.render("login.html");
});

app.get("/signup", function (req, res) {
  res.render("signup.html");
});



app.get("/subscribe", function (req, res) {
  res.render("subscribe.html");
});


app.post("/subscribe", function (req, res) {
  res.render("contact.html");
});


app.get("/", function (req, res) {
    res.render("index.html");
  });
  

app.listen(3000, function(){
    console.log("Server is up and running on port 3000");
});


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.0.2/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
    // apiKey: "AIzaSyDd-dKBBxrgEwSaDcTKntk2tJYXjPOoRZ0",
    // authDomain: "canded-1ccc6.firebaseapp.com",
    // databaseURL: "https://canded-1ccc6.firebaseio.com",
    // projectId: "canded-1ccc6",
    // storageBucket: "canded-1ccc6.appspot.com",
    // messagingSenderId: "821988719347",
    // appId: "1:821988719347:web:f58ad1fbd04a71fe80d586",
    // measurementId: "G-KET84ERS81"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>


// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://canded-1ccc6.firebaseio.com"
// });