const passport = require ('passport');
// ****************************************************************************
// *   export this function for index.js to call with the express app object  *
// *                    pass the app object from index.js                     *
// ****************************************************************************
module.exports = (app) => { 
// specify the provoder for passport
	app.get('/auth/google',
		passport.authenticate ('google', {
		scope: ['profile', 'email']     //select the desire user information from the return info
		})
	);


// ****************************************************************************
// * 	for this route, which will be redirect by google along with the CODE that was issued by google,*
// * 	but as this time, passport sees the CODE in the url and knows that our application has already connected to the server *
// *         	and this time we are trying to extract user information         *
// ****************************************************************************
	app.get('/auth/google/callback', passport.authenticate('google'));
};