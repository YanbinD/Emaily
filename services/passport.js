//use for Oauth
const passport = require("passport"); //require the npm passport module not the passport.js
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/keys"); //we dont have to add file extension for js files

// fetch the model class out of mongoose
const mongoose = require("mongoose");
const UserInDB = mongoose.model("users"); //** this refers to the "user" model class, which has access to the data collection */

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refershToken, profile, done) => {
      UserInDB.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          //we already have the record for the user
          // ** use of done() to tell passport the operation completed **
          // param1 errors, null if none
          // param2 user
          //   http://toon.io/understanding-passportjs-authentication-flow/
          done(null, existingUser);
          console.log("user exist " + existingUser);
        } else {
          // use the model to create a new user instance (data entry )
          console.log("new user created " + profile.id);
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
//===== serialize and deserialize user ======
/* Basically determine what will be stored in the session (stuffed in the cookies to identify the user), 
	this will be called after the GoogleStrategy callback calls done(null, user) with a user entry*/

// 1: user is the same mongoose model instance that we retrived from above
// 2: user.id here is the unique identify id that was assigned by Mango not the GOOGLE profile ID
// 3: Reason to use data base id is that the user can be associate with differnt Oauth provider like (github, twitter)

// passing an arrow function to the serializeUser
passport.serializeUser((user, done) => {
  // the user here is the user entry from the database, user.id is the db id
  done(null, user.id);
});

//first argument: is the exact token that we stuffed into user's cookies ==> user.id
//so the first argument will be id
//Second argument: is the done() function that we have to call after we have successfully
//turn the id back to the user
passport.deserializeUser((id, done) => {
  //search the user in db to turn the id to user
  // ***** Every time we access our Mongo database, it always will be an
  // asynchronous action, to deal with this we have to assume it return a
  // promose that wil be resolved after a user with ID is found
  UserInDB.findById(id).then(user => {
    done(null, user);
  });
});

//===== AFTER definine the serialize and deserialize user,
//		we have to instructure passport that we want to manage all our
//		authentication by using a cookie
//======
