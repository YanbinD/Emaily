const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin');
const minimumCredit = require('../middlewares/minimumCredit');

const Survey = mongoose.model('surveys'); 

module.exports = app => {
    app.app('/api/surveys', requireLogin, minimumCredit, (req, res) => {
        const {title, subject, body, recipients} = req.body; 
        const survey = new Survey ({
            title,
            subject, 
            body, 
            receipients: recipients.split(',').map(email => ({email : email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });
    })
}