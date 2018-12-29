const express = require("express"); //Common js module
// ****************************************************************************
// *                      for using cookies in passport                       *
// ****************************************************************************
const cookieSession = require("cookie-session");
const passport = require("passport");

// ****************************************************************************
// *                          connect to mango (mlab)                         *
// ****************************************************************************
const mongoose = require("mongoose");
const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);
require("./models/User"); // make sure the create the collection before using it in passport (require passport)
require("./models/Survey");
// ****************************************************************************
// because require ('./services/passport') is not returning anything therefore*
// *                   nothing to assign to passport.config ,                 *
// *               so we can just use the require statement from              *
// *          const passportConfig = require ('./services/passport')          *
// ****************************************************************************
require("./services/passport"); //require the passport.js file

const app = express();

//L101 added body parser
const bodyParser = require("body-parser");

app.use(bodyParser.json());
//any time a post/put/patch or anything that has a request body will pass thru this body parser middleware

// ================== FOR using cookies with passport ====================
app.use(
  cookieSession({
    //age has to be in the unit of ms
    maxAge: 24 * 60 * 60 * 1000,
    //encrpted the cookie so our user info will not be intercepted, stored in keys.js
    keys: [keys.cookieKey] // random string of character, it also allows us to define multiple keys and it will be chosen randomly 
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ****************************************************************************
// *            const authRouths = require ('./routes/authRouths')            *
// *                     call authRouth with the app object                   *
// *                              authRouth(app);                             *
//The require statement will turn into a function and called with express app object 
// ****************************************************************************
//combine the two statment since authRouths is not being use anywhere else
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);//L99

require("./routes/surveyRoutes")(app);

//L110, set up for production 
if (process.env.NODE_ENV === "production") {
  //make sure Express will serve up production assets (main.js/main.css files)
  app.use(express.static("client/build"));
  //Express will serve the index.html file if it does not recongnize the route (routes by react router)
  const path = require("path");
  // 
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
