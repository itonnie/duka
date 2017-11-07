var express = require("express");
var User = require("../models/user");
var Product = require('../models/product');
var Sales = require('../models/sales');
var request = require("request");
var jwt = require("jsonwebtoken");

var router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile('index.html');
})

//returns a custom list of todays picks
router.get('/promotions', (req, res, next) => {
    //find all products with offers
    Product.find({ offer: true }, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            var data = new Array();
            //limit promotions to three
            for (i = 0; i < 3; i++) {
                var item = {
                    name: result[i].name,
                    pic_url: result[i].pic_url,
                    barcode: result[i].barcode,
                    price: result[i].price,
                    brand: result[i].brand
                };
                data.push(item);
            }
            res.json({
                ok: true,
                data: data
            });
        }
    })
});

//returns all products matching the category passed in
router.get('/products/:category', ensureToken, (req, res, next) => {
    var category = req.params.category;

    Product.find({ category: category }, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

router.post('/purchase', (req, res, next) => {
    
    var record = req.body;

    var newrecord = new Sales({
        username: record.username,
        lat: record.lat,
        lon: record.lon,
        transaction_mode: record.transaction_mode,
        amount_paid: record.amount_paid,
        address: record.address,
        delivery_instructions: record.delivery_instructions,
        phone: record.phone,
        purchase_date: record.purchase_date,
        delivered: record.delivered,
        items: record.items
    });

    record.items.forEach(function(element) {

        Product.findOne({ barcode: element.barcode }, (err, result) => {
            if(err) {
                console.log(err);
            } else if(result == null) {
                //Do something or write a record somewhere to notify this user that this product no longer exists
                console.log("Product does not exist: " + element.barcode);
                console.log("Username: " + record.username);
                console.log("Phone: " + record.phone);
            } else {
                var newQuantity = Number(result.quantity) - Number(element.quantity);
                //update record to remove x number of items from the record
                Product.findOneAndUpdate({ barcode: element.barcode}, {quantity: newQuantity}, (err, result) => {
                    if(err) {
                        console.log(err);
                    } else {
                        //continue to the next process and save data
                    }
                });
            }
        })

    }, this);

    
    newrecord.save((err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json({
                ok: true,
                message: "Transaction successful, please await your delivery"
            });
        }
    });
    
});

router.post("/verifyphonet", (req, res, next) => {
    var phone = req.body.phone;

    res.json({
        ok: true,
        security_code: 232323,
        sent: true,
        number_valid: true,
        phone: phone
    });
})

router.post('/verifyphone', (req, res, next) => {
    var phone = req.body.phone;
    Number(phone);
    if(isNaN(phone) == true) {
        //this is not a number
        res.json({
            ok: false,
            message: "Please enter a phone number."
        })
    } else if(phone.length > 10 || phone.length < 10) {
        //this is not a phone number
        res.json({
            ok: false,
            message: "Please enter a valid phone number with 10 numerals."
        })
    } else {
        var params = {
            "user-id": "onejohi",
            "api-key": "xCxLWEOHzTXgkWWF0kVy0L5h9FxdTpHFa9y86kXi8jcoK2QF",
            "number": "+254" + phone,
            "code-length": 6
        };

        request.post("https://neutrinoapi.com/sms-verify", {form: params}, (err, response, body) => {
            if(err) {
                res.json({
                    ok: false,
                    security_code: "null",
                    number_valid: false,
                    sent: false,
                    message: err["code"]
                });
            } else {
                var result = JSON.parse(body);
                res.json({
                    ok: true,
                    security_code: result["security-code"],
                    number_valid: true,
                    sent: true,
                    message: "Successful"
                });
            }
        })
    }
});

router.post('/verifycode', (req, res, next) => {
    var code = req.body.code;
    var phone = req.body.phone;

    if(isNaN(code) == true) {
        res.json({
            ok: false,
            message: "Please enter a valid security code"
        });
    } else if(code == null || code == undefined || code == "") {
        res.json({
            ok: false,
            message: "We are recieving an empty code from you, that's all we know at the moment."
        });
    } else if(code.length != 6) {
        res.json({
            ok: false,
            message: "Code is either too long or too short, max is 6."
        });
    } else {
        var params = {
            "user-id": "onejohi",
            "api-key": "xCxLWEOHzTXgkWWF0kVy0L5h9FxdTpHFa9y86kXi8jcoK2QF",
            "security-code": code
        };

        request.post("https://neutrinoapi.com/verify-security-code", {form: params}, (err, response, body) => {
            if(err) {
                res.json({
                    ok: false,
                    token: undefined,
                    message: "Error code:" + err["code"]
                });
            } else {
                var data = JSON.parse(body);

                if(data.verified == true) {
                    var token = jwt.sign({ phone: phone }, "secretestkey");

                    res.json({
                        ok: true,
                        token: token,
                        message: "Auth successful"
                    })
                } else {
                    res.json({
                        ok: false,
                        token: undefined,
                        message: "Number may not be valid. Verification failed for this number. Contact Customer Care."
                    });
                }
            }
        })
    }
});

function ensureToken(req, res, next) {
    var bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        var bearertoken = bearer[1];
        req.token = bearertoken;
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;