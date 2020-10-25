
let fb_btn = document.getElementById("fb_btn")
let google_btn = document.getElementById("google_btn")
let email_signup = document.getElementById("email_signup")
let email_signin = document.getElementById("email_signin")
let email_signout = document.getElementById("email_signout")
let password = document.getElementById("password")


email_signup.addEventListener("click", () => {
    // console.log(email.value,pass.value)
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(function (data) {
            console.log(data)
        })
        .catch(function (error) {
            console.log(error.message)
            // ...
        });
})


email_signin.addEventListener("click", () => {
    user_status()
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(function (data) {
            console.log(data)
            console.log("email is =>", data.user.email)
            console.log("UID is =>", data.user.uid)

        })
        .catch(function (error) {
            console.log(error.message)
        });

})

email_signout.addEventListener("click", () => {
    // console.log("signout")
    // firebase.auth().signout()
    //     .then(() => {
    //         console.log("successfully logout")
    //     })
    //     .cathc((err) => {
    //         console.log(err.message)
    //     })
    user_status()
})

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//       console.log("user signed in")
//     } else {
//       // User is signed out.
//       // ...
//       console.log("user signed out")
//     }
//   });


let user_status = ()=>{
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      console.log("user is signing")
    } else {
      // No user is signed in.
      console.log("user is not signed in")
    }
    
}


fb_btn.addEventListener("click", () => {
    console.log("fb")
})

google_btn.addEventListener("click", () => {
    console.log("google")
})