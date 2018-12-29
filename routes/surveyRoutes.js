const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin');
const minimumCredit = require('../middlewares/minimumCredit');
const Mailer = require ('../services/Mailer');
const SurveyTemplate = require  ('../services/emailTemplates/surveyTemplate');
const Survey = mongoose.model('surveys'); 

module.exports = app => {
    app.post('/api/surveys', requireLogin, minimumCredit, (req, res) => {
        const {title, subject, body, recipients} = req.body; 
        const survey = new Survey ({
            title,
            subject, 
            body, 
            receipients: recipients.split(',').map(email => ({email : email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
        // send email here @param1: object @param2: HTML of the email body 
        const mailer = new Mailer (survey, SurveyTemplate(survey)); 
    });
};

