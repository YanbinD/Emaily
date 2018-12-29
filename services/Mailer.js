const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

// extends the Mail class in the sendGrid library , can be treated as a react component 
class Mailer extends helper.Mail {

    // deconstruct the object for subject and recipients 
    constructor ({subject, recipients}, content) {
        
    }
}


module.exports = Mailer;