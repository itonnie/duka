var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    brand: String,
    pic_url: String,
    price: Number,
    mdate: Date,
    category: String,
    deliverable: Boolean,
    offer: Boolean,
    barcode: Number,
    desc: String,
    delivered: Boolean
}, { collection: 'products' });

var Product = mongoose.model('Product', productSchema);

module.exports = Product;