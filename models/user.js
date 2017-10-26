var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    phone: Number,
    password: String,
    verified: Boolean
}, { collection: 'users' });

var User = mongoose.model('User', userSchema);

module.exports = User;
