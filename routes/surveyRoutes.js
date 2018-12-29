const requireLogin = require('../middlewares/requireLogin');
const minimumCredit = require('../middlewares/minimumCredit');

module.exports = app => {
    app.app('/api/surveys', requireLogin,  (req, res) => {

    })
}