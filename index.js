const express = require('express'); //Common js module
// ****************************************************************************
// *                          connect to mango (mlab)                         *
// ****************************************************************************
const mongoose = require('mongoose');
const keys = require('./config/keys')
mongoose.connect(keys.mongoURI);
require('./models/User');

// ****************************************************************************
// because require ('./services/passport') is not returning anything therefore*
// *                   nothing to assign to passport.config ,                 *
// *               so we can just use the require statement from              *
// *          const passportConfig = require ('./services/passport')          *
// ****************************************************************************
require ('./services/passport')//require the passport.js file 

// ****************************************************************************
// *                      for using cookies in passport                       *
// ****************************************************************************
const cookieSession = require ('cookie-session');
const passport = require ('passport');


const app = express();

app.use (
	cookieSession( {
		//age has to be in the unit of ms 
		maxAge : 24 * 60 * 60 * 1000,
		//encrpted the cookie so our user info will not be intercepted, stored in keys.js
		keys: [keys.cookieKey]
	})
);
app.use (passport.initialize());
app.use (passport.session());


// ****************************************************************************
// *            const authRouths = require ('./routes/authRouths')            *
// *                     call authRouth with the app object                   *
// *                              authRouth(app);                             *
// ****************************************************************************
//combine the two statment since authRouths is not being use anywhere else 
require ('./routes/authRoutes')(app);


// app.get('/', function(req, res){
// 	res.send({hello: "world"});
// }) ;


const PORT = process.env.PORT || 5000;
app.listen(PORT);
