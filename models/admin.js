var mongoose = require("mongoose");

var adminSchema = mongoose.Schema({
    username: String,
    password: String
}, { collection: 'admin'});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;