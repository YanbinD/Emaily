const express = require('express'); //Common js module

// ****************************************************************************
// because require ('./services/passport') is not returning anything therefore*
// *                   nothing to assign to passport.config ,                 *
// *               so we can just use the require statement from              *
// *          const passportConfig = require ('./services/passport')          *
// ****************************************************************************
require ('./services/passport')//require the passport.js file 

// ****************************************************************************
// *                          connect to mango (mlab)                         *
// ****************************************************************************
const mongoose = require('mongoose');
const keys = require('./config/keys')
mongoose.connect(keys.mongoURI);


const app = express();

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


const PORT = process.env.PORT || 3000;
app.listen(PORT);
