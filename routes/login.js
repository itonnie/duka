var express = require('express');
var User = require("../models/user");

var router = express.Router();

router.post("/", (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    /*
    if(User.checkUserExists(email) == true && User.checkUserAuth(email, password) == false) {
        res.json({
            ok: false,
            message: "Wrong password for " + email + ". Have you forgotten your password bruh?"
        });
    } else if(User.checkUserExists(email) == false && User.checkUserAuth(email, password) == false) {
        res.json({
            ok: false,
            message: "User does not exist. Would you like to create a new account with us?"
        });
    } else if(User.checkUserExists(email) == true && User.checkUserAuth(email, password) == true) {
        res.json({
            ok: true,
            message: "Successful login. Token should be sent along here"
        });
    }*/

    console.log(User.checkUserExists(email));
    
})

module.exports = router;