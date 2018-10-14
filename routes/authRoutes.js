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
	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
			 //redirect the user after logged in --> DashBoard screen maybe 
			 res.redirect('/surveys')
		}
	);

// ****************************************************************************
// *               Route that examine the property of req.user                *
// ****************************************************************************
	app.get('/api/current_user', (req, res) => {
			res.send(req.user);
		});

// ****************************************************************************
// *                      Route to handle log-out request                     *
// ****************************************************************************
	app.get('/api/logout', (req, res) => {
// ****************************************************************************
// *          req.logout() is a function that automatically attached          *
// *            to the object by passport, when we call logout, it            *
// *          takes the cookie that contains our USER id and it kills         *
// *        the ID that is in there (aka you are not that user anymore)       *
// ****************************************************************************
		req.logout();
		//res.send(req.user); // this should send out undefined / no content 
		//added in L85 to handle logout 
		res.redirect('/');
	}); 
};//end of export function 

