const _ = require('lodash');
const {Path} = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin');
const minimumCredit = require('../middlewares/minimumCredit');
const Mailer = require ('../services/Mailer');
const SurveyTemplate = require  ('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys'); 

module.exports = app => {

    // ** route for handling Webhooks post request 
    app.post('/api/surveys/webhooks', (req, res) => {
        // console.log( " body  " )
        // console.log ( req.body);
        const p = new Path('/api/surveys/:surveyId/:choice');
        
        _.chain(req.body)
          .map(({ email, url }) => {
            const match = p.test(new URL(url).pathname);
            if (match) {
              return { email, surveyId: match.surveyId, choice: match.choice };
            }
          })
          .compact()
          .uniqBy('email', 'surveyId')
          .each(({ surveyId, email, choice }) => {
            Survey.updateOne( // even if this is a async piece, we do not need use async feature because the request can be responded even befroe the query is executed 
              {
                _id: surveyId,
                recipients: {
                  $elemMatch: { email: email, responded: false }
                }
              },
              {
                $inc: { [choice]: 1 },
                $set: { 'recipients.$.responded': true },
                lastResponded: new Date()
              }
            ).exec();
          })
          .value();
        
        res.send({});
      });

    // ** route for directing USER back to a thank you page 
    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('<h1> Thanks for voting! Your feedback is appreciated </h1>');
    });
    
    // ** route for sending off a mailer to sendgrid
    app.post('/api/surveys', requireLogin, minimumCredit, async (req, res) => {
        const {title, subject, body, recipients} = req.body; 
        const survey = new Survey ({
            title,
            subject, 
            body, 
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        
        // send email here @param1: object @param2: HTML of the email body 
        const mailer = new Mailer (survey, SurveyTemplate(survey)); 
        // console.log(mailer);
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
      
            res.send(user); //send back the user so the react component updates 
          } catch (err) {
            res.status(422).send(err); //422 unprocessable entity 
          }
    });

    app.get('/api/surveys', requireLogin, async (req, res) => {
        // tell mongoose do not return the list of recipients 
        const surveys = await Survey.find({ _user : req.user.id})
        .select ({ recipients : false }); 
    })

};


       // // Stage one: filter out object from URL 
        // const events = _.map(req.body, ({email, url}) => {
        //     const pathname = new URL (url).pathname;
        //     const match = p.test(pathname);
        //     if (match) {
        //         return {email : email, surveyId : match.surveyId, choice : match.choice};
        //     }
        // })
        // // Stage 1.5: filter out the undefined event from stage 1
        // const compactEvent = _.compact(events); 
        // // Stage 2 : remove duplicate event  @param1: array @param2,3 property that needs to be unique 
        // const uniqueEvent = _.uniqBy(compactEvent, 'email', 'surveyId'); 
        // console.log(uniqueEvent);
