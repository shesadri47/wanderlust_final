const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const User = require('../models/user'); // Adjust path if necessary

const userSchema = new Schema({
  email: {
    type: String, 
    required: true
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
