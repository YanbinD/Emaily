//next , will be called when the middleware finish running, 
//but chances are there might be different middlewares in our application, 
//when next () is called, it will then pass the request off to the next middleware in the chain 

//if something is wrong, we can choose to immediate send back the response 

module.exports = (req,res,next) => { 

		if (!req.user) {
			return res.status(401).sent({error : 'you are not logged in'});
		} 
		next(); //everything is good, continue passing the request 

}