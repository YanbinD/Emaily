//use for Oauth 
const passport = require('passport'); //require the npm passport module not the passport.js
const GoogleStrategy = require('passport-google-oauth20').Strategy; 

const keys = require('../config/keys') //we dont have to add file extension for js files 
// ./ means the current directory ../ means one level above 


const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.use(new GoogleStrategy({
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		}, 
		(accessToken, refershToken, profile,done) => {
			User.findOne({googleID: profile.id}).then((existingUser) => {
	            if (existingUser) {
	                //we already have the record for the user 

	                // ** use of done **
	                done (null, existingUser);	
	                console.log("user exist " + existingUser)
	            } else {
	                //create a new user 
	                console.log("new user created " + profile.id)
					new User({googleID : profile.id }).save()
					.then(user => done(null, user));
	            }
			});  				
	    }
	)
);  


