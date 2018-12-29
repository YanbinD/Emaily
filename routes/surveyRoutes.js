const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin');
const minimumCredit = require('../middlewares/minimumCredit');
const Mailer = require ('../services/Mailer');
const SurveyTemplate = require  ('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys'); 
module.exports = app => {
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

        console.log(survey);

        // send email here @param1: object @param2: HTML of the email body 
        const mailer = new Mailer (survey, SurveyTemplate(survey)); 
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
      
            res.send(user);
          } catch (err) {
            res.status(422).send(err);
          }
    });
};

