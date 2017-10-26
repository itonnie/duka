var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var cors = require("cors")

mongoose.connect('mongodb://onejohi:lisanjeri@ds113825.mlab.com:13825/duka')

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/', require("./routes/index"));
app.use('/signin', require("./routes/signin"));
app.use('/login', require("./routes/login"));
app.use('/admin', require("./routes/admin"));

app.listen(process.env.PORT || 3030, () => {
    console.log("server running on port 3030");
});