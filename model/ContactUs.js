var mongoose = require('mongoose');
//mongoose.connect('mongodb://ubuntu@ec2-54-89-39-27.compute-1.amazonaws.com:27017/newdata');
mongoose.connect('mongodb://localhost/lilitwits');

var ContactUsSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    comment: String,
    course: String,
    address:String,
    city:String,
    createdDate: Date
});

// create model if not exists.
module.exports = mongoose.model('ContactUs',ContactUsSchema);