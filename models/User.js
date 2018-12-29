const mongoose = require('mongoose');
const { Schema } = mongoose; // equal to const Schema = mongoose.Schema;

// mongoose needs to know the schema
// but it can be changed if needed 
const userSchema = new Schema ( {
	//name : type
	googleID: String,
	credits: {type: Number, default: 0}
})

// ****************************************************************************
// * tells mongoose that we want to crate a new data collection call users with the defined userSchema, *
// * if a data collection exist already, mongoose will not create a new instance *
// **************************************************************************** 
mongoose.model('users', userSchema); //loads the schema into mongoose 
