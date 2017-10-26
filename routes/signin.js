var express = require('express');
var User = require('../models/user');

var router = express.Router();

//POST: site.com/signin
//Recieves username, email and password
router.post('/', (req, res, next) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ email: email }, (err, result) => {
        if(err) {
            console.log(err);
        } else if(result == null) {
            //save user if no user exists
            var newuser = new User({
                username: username,
                email: email,
                password: password,
                verified: false
            });

            newuser.save((err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    res.json({
                        ok: true,
                        user: result
                    });
                }
            })
        } else {
            res.json({
                ok: false,
                message: "User already exists. Would you like to login?"
            })
        }
    })

});

module.exports = router;