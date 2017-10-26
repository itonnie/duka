var express = require("express");
var User = require("../models/user");
var Product = require('../models/product');
var Sales = require('../models/sales');

var router = express.Router();

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
router.get('/products/:category', (req, res, next) => {
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
    /*var barcode = req.body.barcode;
    var quantity = req.body.quantity;
    var username = req.body.username;
    var phone = req.body.phone;
    var amount = req.body.amount;
    var transaction_id = req.body.transaction_id;
    var lon = req.body.lon;
    var lat = req.body.lat;
    var address = req.body.address;
    var delivery_instructions = req.body.delivery_instructions;
    var name = req.body.name;
    var delivered = req.body.delivered;
    var purchase_date = req.body.purchase_date;
    var transaction_mode = req.body.transaction_mode;

    Number(quantity);

    //find barcode item and reduce its quantity
    Product.findOne({ barcode: barcode }, (err, result) => {
        if(err) {
            console.log(err);
        } else if(result == null) {
            res.json({
                ok: false,
                message: "Seems the product you are trying to purchase is no longer available. Please contact support for help."
            });
        } else {
            console.log(result);
            var newQuantity = Number(result.quantity) - Number(quantity);
            //reduce quantity
            console.log(newQuantity);

            Product.findOneAndUpdate({ barcode: barcode }, { quantity: newQuantity }, (err, response) => {
                if(err) {
                    console.log(err);
                } else {
                    //product updated. Save sales record to database.
                    var newsale = new Sales({
                        name: name,
                        quantity: quantity,
                        brand: result.brand,
                        price: result.price,
                        category: result.category,
                        deliverable: result.deliverable,
                        bardcode: barcode,
                        purchase_date: purchase_date,
                        username: username,
                        amount_paid: amount,
                        transaction_mode: transaction_mode,
                        delivery_instructions: delivery_instructions,
                        lat: lat,
                        lon: lon,
                        address: address,
                        delivered: delivered,
                        phone: phone
                    });

                    newsale.save((err, result) => {
                        if(err) {
                            console.log(err);
                        } else {
                            res.json({
                                ok: true,
                                data: result
                            });
                        }
                    });
                }
            })
        }
    })*/
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

module.exports = router;