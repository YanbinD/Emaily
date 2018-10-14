const keys = require ('../config/keys');
const stripe = require ('stripe') (keys.stripeSecretKey);

module.exports = (app) => { 
	app.post('/api/stripe', async (req, res) => {
		//console.log(req.body); //whenever the request body is parsed, it will be available under the req.body property 
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: "$5 for  credits",
			source : req.body.id
		});

		//passport enable us to access the current user this way L104
		req.user.credits += 5;
		const user = await req.user.save();
		//user on left is the database version of the user model just saved 
		res.send(user); 
	});
};//end of export function 