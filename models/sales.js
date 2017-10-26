var mongoose = require('mongoose');

var saleSchema = mongoose.Schema({
    username: String,
    lat: Number,
    lon: Number,
    transaction_mode: String,
    amount_paid: Number,
    address: String,
    delivery_instructions: String,
    purchase_date: Date,
    delivered: Boolean,
    phone: Number,
    items: [
        {
            barcode: Number,
            name: String,
            quantity: Number,
            price: Number
        }
    ]
}, { collection: 'sales'});

var Sale = mongoose.model('Sale', saleSchema);

module.exports = Sale;