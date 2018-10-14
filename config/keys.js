// keys .js figure out what set of credential to return 

//Node_ENV 
if (process.env.NODE_ENV === 'production ') {
	module.exports = require ("./prod")
} else {
	module.exports = require ('./dev')
}