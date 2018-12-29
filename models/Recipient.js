const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false } //pass in a value like string or define types with object
});
module.exports = recipientSchema;
