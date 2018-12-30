const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey); //npm install stripe 

const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    //L106, we can pass in as many function/middleware that we want, but one of them has to return the response
    //requireLogin will run
    // https://stripe.com/docs/api/charges/create?lang=node
    //console.log(req.body); //whenever the request body is parsed, it will be available under the req.body property when body-parser is applied
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for  credits",
      source: req.body.id 
    });

    //***  */passport enable us to access the current user as req.user L104
    req.user.credits += 5;
    const user = await req.user.save(); // retrieve a the new db entry that has been successfully saved to the db as reference 
    //user on left is the database version of the user model just saved
    res.send(user); //respond the request with the updated user 
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    console.log (req.body);
    // const p = new Path('/api/surveys/:surveyId/:choice');

    // _.chain(req.body)
    //   .map(({ email, url }) => {
    //     const match = p.test(new URL(url).pathname);
    //     if (match) {
    //       return { email, surveyId: match.surveyId, choice: match.choice };
    //     }
    //   })
    //   .compact()
    //   .uniqBy('email', 'surveyId')
    //   .each(({ surveyId, email, choice }) => {
    //     Survey.updateOne(
    //       {
    //         _id: surveyId,
    //         recipients: {
    //           $elemMatch: { email: email, responded: false }
    //         }
    //       },
    //       {
    //         $inc: { [choice]: 1 },
    //         $set: { 'recipients.$.responded': true },
    //         lastResponded: new Date()
    //       }
    //     ).exec();
    //   })
    //   .value();

    res.send({});
  });


}; //end of export function


