const mongoose = require('mongoose');
// equal to const Schema = mongoose.Schema;

const { Schema } = mongoose;

const userSchema = new Schema ( {
	//name : type
	googleID: String,
	credits: {type: Number, default: 0}
})

// ****************************************************************************
// * tells mongoose that we want to crate a new data collection call users with the defined userSchema, *
// * if a data collection exist already, mongoose will not create a new instance *
// **************************************************************************** 
mongoose.model('users', userSchema);
