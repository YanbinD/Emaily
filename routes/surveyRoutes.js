const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin');
const minimumCredit = require('../middlewares/minimumCredit');
const Mailer = require ('../services/Mailer');
const SurveyTemplate = require  ('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys'); 
module.exports = app => {

    app.get('/api/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting!');
      });
      
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
};

