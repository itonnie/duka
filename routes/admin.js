var express = require('express');
var User = require('../models/user');
var Admin = require('../models/admin');
var Product = require('../models/product');
var Sales = require('../models/sales');
var path = require("path");

var router = express.Router();

/*
router.get('/', (req, res, next) => {
    //serve admin SPA page
    res.sendFile(path.resolve(__dirname, "../public", "index.html"));
}); */

//return a list of all users who use the app
router.get('/users', (req, res, next) => {
    User.find((err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json({
                ok: true,
                data: result
            });
        }
    });
});

//gets reports depending on date
router.get('/report', (req, res, next) => {

});

//returns all categories
router.get('/categories', (req, res, next) => {

});

//gets all products in that category
router.get('/products/:category', (req, res, next) => {
    var category = req.params.category;

    Product.find({ category: category }, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json({
                data: result
            });
        }
    });
});

router.get('/products', (req, res, next) => {
    Product.find((err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json({
                data: result
            });
        }
    });
});

//gets all the admins from the database
router.get('/admins', (req, res, next) => {
    Admin.find((err, value) => {
        if(err) {
            console.log(err);
        } else {
            res.json({
                ok: true,
                data: value
            });
        }
    })
});

router.get('/removeadmin/:id', (req, res, next) => {
    var id = req.params.id;

    if(id == null || id == undefined || id == "") {
        res.json({
            ok: false,
            message: "please specify an id"
        });
    } else {
        Admin.findByIdAndRemove(id, (err, response) => {
            if(err) {
                console.log(err);
            } else {
                res.json({
                    ok: true,
                    deleted: response
                });
            }
        })
    }
});

router.get('/pending', (req, res, next) => {
    Sales.find({ delivered: false }, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.json({
                ok: true,
                data: result
            });
        }
    })
})

//add a new product to the cartegory
router.post('/addproduct', (req, res, next) => {
    var name = req.body.name;
    var quantity = req.body.quantity;
    var brand = req.body.brand;
    var price = req.body.price;
    var mdate = req.body.date;
    var category = req.body.category;
    var deliverable = req.body.deliverable;
    var barcode = req.body.barcode;
    var desc = req.body.desc;
    var offer = req.body.offer;
    var pic_url = req.body.pic_url;

    Product.findOne({ barcode: barcode }, (err, result) => {
        if(err) {
            console.log(err);
        } else if(result == null) {
            var newProduct = new Product({
                name: name,
                quantity: quantity,
                brand: brand,
                price: price,
                mdate: mdate,
                category: category,
                deliverable: deliverable,
                barcode: barcode,
                desc: desc,
                offer: offer,
                pic_url: pic_url
            });

            newProduct.save((err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    res.json({
                        ok: true,
                        type: "Saved",
                        data: result
                    });
                }
            })
        } else if(result) {
        
            /*var newquant = Number(result.quantity) + Number(quantity);
            

            Product.findOneAndUpdate({barcode: barcode }, {quantity: newquant}, (err, result) => {
                if(err) {
                    console.log(err);
                } else {
                    Product.findOne({barcode: barcode}, (err, response) => {
                        if(err) {
                            console.log(err);
                        } else {
                            res.json({
                                ok: true,
                                type: "Update",
                                result: response
                            });
                        }
                    });
                }
            }); */

            res.json({
                ok: false,
                message: "Product aleady exists, go to product tab and look for " + result.name + " to add more quantity."
            });

        }

    });
});

//removes a particular product completely from the market
router.post('/removeproduct', (req, res, next) => {
    var barcode = req.body.barcode;

    if(barcode == null || barcode == undefined || barcode == "") {
        res.json({
            ok: false,
            message: "Could not delete unidentified product"
        });
    } else {

        Product.findOneAndRemove({ barcode: barcode }, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.json({
                    ok: true,
                    result: result
                });
            }
        })

    }

});

router.post('/addoffer', (req, res, next) => {
    var barcode = req.body.barcode;

    Product.findOne({barcode: barcode}, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            Product.findOneAndUpdate({barcode: barcode}, {offer: true}, (err, result) => {
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
});

//Admin authorization

//create a new administrator. Must be logged in
router.post('/addadmin', (req, res, next) => {

    var username = req.body.username;
    var password = req.body.password;

    if(username == undefined || username == null || username == "" || password == "" || password == undefined || password == null) {
        res.json({
            ok: false,
            message: "Please enter valid data into your form and try again"
        });
    } else {
        Admin.findOne({ username: username }, (err, result) => {
            if(err) {
                console.log(err);
            } else if(result == null) {
    
                var newadmin = new Admin({
                    username: username,
                    password: password
                });
    
                newadmin.save((err, result) => {
                    if(err) {
                        console.log(err);
                    } else {
                        res.json({
                            ok: true,
                            admin: result
                        });
                    }
                });
    
            } else if (result) {
                res.json({
                    ok: false,
                    message: "Admin already exists."
                });
            }
        });
    }

});

//logs in the admin
router.post('/login', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    if(username == undefined || username == null || username == "" || password == "" || password == undefined || password == null) {
        res.json({
            ok: false,
            message: "Please enter valid data into your form and try again"
        });
    } else {
        Admin.findOne({ username: username }, (err, result) => {
            if(err) {
                console.log(err);
            } else if(result == null) {
                res.json({
                    ok: false,
                    message: "No such user exists, would you like to create a new administrator?"
                });
            } else if (result) {
                Admin.findOne({ username: username, password: password}, (err, result) => {
                    if(err) {
                        console.log(err);
                    } else if(result == null) {
                        res.json({
                            ok: false,
                            message: "Wrong username and password combination."
                        });
                    } else if(result) {
                        res.json({
                            ok: true,
                            message: "successful login. Please save your token key"
                        });
                    }
                });
            }
        });
    }
});

module.exports = router;